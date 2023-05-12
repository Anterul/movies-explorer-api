const { celebrate, Joi } = require('celebrate');
const { REGEX_URL } = require('./regEx');
const {
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
  NAME_MUST_BE_FILLED,
  EMAIL_MUST_BE_FILLED,
  EMAIL_MUST_BE_VALID,
  PASSWORD_MUST_BE_FILLED,
  ID_MUST_BE_24,
  ID_MUST_BE_FILLED,
} = require('./messageConstants');

module.exports.validateRegister = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required()
      .messages({
        'string.min': MIN_NAME_LENGTH,
        'string.max': MAX_NAME_LENGTH,
        'string.empty': NAME_MUST_BE_FILLED,
      }),
    email: Joi.string().email().required()
      .messages({
        'string.empty': EMAIL_MUST_BE_FILLED,
        'any.only': EMAIL_MUST_BE_VALID,
      }),
    password: Joi.string().required()
      .messages({
        'string.empty': PASSWORD_MUST_BE_FILLED,
      }),
  }),
});

module.exports.validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required()
      .messages({
        'string.empty': EMAIL_MUST_BE_FILLED,
        'any.only': EMAIL_MUST_BE_VALID,
      }),
    password: Joi.string().required()
      .messages({
        'string.empty': PASSWORD_MUST_BE_FILLED,
      }),
  }),
});

module.exports.validateProfile = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required()
      .messages({
        'string.min': MIN_NAME_LENGTH,
        'string.max': MAX_NAME_LENGTH,
        'string.empty': NAME_MUST_BE_FILLED,
      }),
    email: Joi.string().email().required()
      .messages({
        'string.empty': EMAIL_MUST_BE_FILLED,
        'any.only': EMAIL_MUST_BE_VALID,
      }),
  }),
});

module.exports.validateMovieCard = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().regex(REGEX_URL).required(),
    trailerLink: Joi.string().regex(REGEX_URL).required(),
    thumbnail: Joi.string().regex(REGEX_URL).required(),
    owner: Joi.string().hex().length(24),
    movieId: Joi.string().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

module.exports.validateMovieCardId = celebrate({
  params: Joi.object().keys({
    movieCardId: Joi.string().hex().length(24).required()
      .messages({
        'string.empty': ID_MUST_BE_FILLED,
        'any.only': ID_MUST_BE_24,
      }),
  }),
});
