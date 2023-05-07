const Movie = require('../models/movie');
const BadRequest = require('../utils/errors/BadRequest'); // 400
const Forbidden = require('../utils/errors/Forbidden'); // 403
const NotFound = require('../utils/errors/NotFound'); // 404

module.exports.getMovieCards = (req, res, next) => {
  const owner = req.user._id;
  Movie.find({ owner })
    .then((movies) => res.send(movies))
    .catch((err) => next(err));
};

module.exports.createMovieCard = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner: req.user,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movie) => res.send({ movie }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequest('Переданы некорректные данные при создании карточки.'));
      } else {
        next(err);
      }
    });
};

module.exports.deleteMovieCard = (req, res, next) => {
  const { movieCardId } = req.params;
  Movie.findById(movieCardId)
    .then((movie) => {
      if (movie === null) {
        throw new NotFound('Карточка с фильмом с указанным _id не найдена.');
      }
      if (movie.owner.toString() !== req.user._id) {
        throw new Forbidden('Вы не можете удалить карточку с фильмом друго пользователя');
      }
      return movie.deleteOne().then(() => res.send({ message: 'Пост удалён' }));
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequest('Переданы некорректные данные для удаления карточки с фильмом.'));
      } else {
        next(err);
      }
    });
};
