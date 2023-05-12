// movies
const INCORRECT_MOVIE_DATA = 'Переданы некорректные данные при создании карточки с фильмом.';
const MOVIE_CARD_NOT_FOUND = 'Карточка с фильмом с указанным _id не найдена.';
const CANT_DELETE = 'Вы не можете удалить карточку с фильмом друго пользователя';
const POST_DELETED = 'Пост удалён';
const INCORRECT_DELETE_DATA = 'Переданы некорректные данные для удаления карточки с фильмом.';
// users
const EMAIL_REGISTERED = 'Такой адрес электронной почты уже зарегистрирован';
const INCORRECT_USER_DATA = 'Переданы некорректные данные при создании пользователя.';
const USER_NOT_FOUND = 'пользователь не найден';
const USER_ID_NOT_FOUND = 'Пользователь с указанным _id не найден.';
const INCORRECT_UPDATE_DATA = 'Переданы некорректные данные при обновлении профиля.';
// auth
const AUTH_REQUIRED = 'Необходима авторизация';
// errorHandler
const SERVER_ERROR = 'На сервере произошла ошибка';
// models/movie
const INCORRECT_LINK = 'Неправильный формат ссылки';
// models/user || validators
const MIN_NAME_LENGTH = 'минимальная длина поля "name" - 2';
const MAX_NAME_LENGTH = 'максимальная длина поля "name" - 30';
const NAME_MUST_BE_FILLED = 'поле "name" должно быть заполнено';
const INCORRECT_MAIL = 'Неправильный формат почты';
const INCORRECT_MAIL_OR_PASSWORD = 'Неправильные почта или пароль';
const EMAIL_MUST_BE_FILLED = 'поле "email" должно быть заполнено';
const EMAIL_MUST_BE_VALID = 'поле "email" должно быть валидным адресом электронной почты';
const PASSWORD_MUST_BE_FILLED = 'поле "password" должно быть заполнено';
const ID_MUST_BE_FILLED = 'поле "id" должно быть заполнено';
const ID_MUST_BE_24 = 'поле "id" должно состоять из 24 символов';
// app
const NON_EXISTENT_ROUTE = 'Несуществующий маршрут.';

module.exports = {
  // movies
  INCORRECT_MOVIE_DATA,
  MOVIE_CARD_NOT_FOUND,
  CANT_DELETE,
  POST_DELETED,
  INCORRECT_DELETE_DATA,
  // users
  EMAIL_REGISTERED,
  INCORRECT_USER_DATA,
  USER_NOT_FOUND,
  USER_ID_NOT_FOUND,
  INCORRECT_UPDATE_DATA,
  // auth
  AUTH_REQUIRED,
  // errorHandler
  SERVER_ERROR,
  // models/movie
  INCORRECT_LINK,
  // models/user || validators
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
  NAME_MUST_BE_FILLED,
  INCORRECT_MAIL,
  INCORRECT_MAIL_OR_PASSWORD,
  EMAIL_MUST_BE_FILLED,
  EMAIL_MUST_BE_VALID,
  PASSWORD_MUST_BE_FILLED,
  ID_MUST_BE_FILLED,
  ID_MUST_BE_24,
  // app
  NON_EXISTENT_ROUTE,
};
