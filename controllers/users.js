const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const BadRequest = require('../utils/errors/BadRequest'); // 400
const NotFound = require('../utils/errors/NotFound'); // 404
const Conflict = require('../utils/errors/Conflict'); // 409
const { NODE_ENV, JWT_SECRET } = require('../utils/envConstants');
const {
  EMAIL_REGISTERED,
  INCORRECT_USER_DATA,
  USER_NOT_FOUND,
  USER_ID_NOT_FOUND,
  INCORRECT_UPDATE_DATA,
} = require('../utils/messageConstants');

module.exports.createUser = (req, res, next) => {
  const {
    name,
    email,
    password,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name,
      email,
      password: hash,
    }))
    .then((user) => {
      const userObject = user.toObject();
      delete userObject.password;
      res.send({
        _id: userObject._id,
        name: userObject.name,
        email: userObject.email,
      });
    })
    .catch((err) => {
      if (err.code === 11000) {
        next(new Conflict(EMAIL_REGISTERED));
      } else if (err.name === 'ValidationError') {
        next(new BadRequest(INCORRECT_USER_DATA));
      } else {
        next(err);
      }
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      res.send({ token });
    })
    .catch((err) => next(err));
};

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFound(USER_NOT_FOUND);
      }
      return res.send({
        name: user.name,
        email: user.email,
      });
    })
    .catch((err) => next(err));
};

module.exports.updateProfile = (req, res, next) => {
  const { name, email } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    {
      name,
      email,
    },
    { new: true, runValidators: true },
  )
    .then((user) => {
      if (user === null) {
        throw new NotFound(USER_ID_NOT_FOUND);
      }
      return res.send({
        name: user.name,
        email: user.email,
      });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequest(INCORRECT_UPDATE_DATA));
      } else {
        next(err);
      }
    });
};
