const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const Unauthorized = require('../utils/errors/Unauthorized'); // 401
const {
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
  INCORRECT_MAIL,
  INCORRECT_MAIL_OR_PASSWORD,
} = require('../utils/messageConstants');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'Мария',
    minlength: [2, MIN_NAME_LENGTH],
    maxlength: [30, MAX_NAME_LENGTH],
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: INCORRECT_MAIL,
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Unauthorized(INCORRECT_MAIL_OR_PASSWORD));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Unauthorized(INCORRECT_MAIL_OR_PASSWORD));
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
