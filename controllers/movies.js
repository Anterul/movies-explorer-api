const Movie = require('../models/movie');
const BadRequest = require('../utils/errors/BadRequest'); // 400
const Forbidden = require('../utils/errors/Forbidden'); // 403
const NotFound = require('../utils/errors/NotFound'); // 404
const {
  INCORRECT_MOVIE_DATA,
  MOVIE_CARD_NOT_FOUND,
  CANT_DELETE,
  POST_DELETED,
  INCORRECT_DELETE_DATA,
} = require('../utils/messageConstants');

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
        next(new BadRequest(INCORRECT_MOVIE_DATA));
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
        throw new NotFound(MOVIE_CARD_NOT_FOUND);
      }
      if (movie.owner.toString() !== req.user._id) {
        throw new Forbidden(CANT_DELETE);
      }
      return movie.deleteOne().then(() => res.send({ message: POST_DELETED }));
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequest(INCORRECT_DELETE_DATA));
      } else {
        next(err);
      }
    });
};
