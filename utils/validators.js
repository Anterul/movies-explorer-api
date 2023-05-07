const { celebrate, Joi } = require('celebrate');
const { REGEX_URL } = require('./regEx');

module.exports.validateRegister = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required()
      .messages({
        'string.min': 'минимальная длина поля "name" - 2',
        'string.max': 'максимальная длина поля "name" - 30',
        'string.empty': 'поле "name" должно быть заполнено',
      }),
    email: Joi.string().email().required()
      .messages({
        'string.empty': 'поле "email" должно быть заполнено',
        'any.only': 'поле "email" должно быть валидным адресом электронной почты',
      }),
    password: Joi.string().required()
      .messages({
        'string.empty': 'поле "password" должно быть заполнено',
      }),
  }),
});

module.exports.validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required()
      .messages({
        'string.empty': 'поле "email" должно быть заполнено',
        'any.only': 'поле "email" должно быть валидным адресом электронной почты',
      }),
    password: Joi.string().required()
      .messages({
        'string.empty': 'поле "password" должно быть заполнено',
      }),
  }),
});

module.exports.validateProfile = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required()
      .messages({
        'string.min': 'минимальная длина поля "name" - 2',
        'string.max': 'максимальная длина поля "name" - 30',
        'string.empty': 'поле "name" должно быть заполнено',
      }),
    email: Joi.string().email().required()
      .messages({
        'string.empty': 'поле "email" должно быть заполнено',
        'any.only': 'поле "email" должно быть валидным адресом электронной почты',
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
        'string.empty': 'поле "id" должно быть заполнено',
        'any.only': 'поле "id" должно состоять из 24 символов',
      }),
  }),
});
