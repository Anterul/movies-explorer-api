const { SERVER_ERROR } = require('../utils/messageConstants');

module.exports.errorHandler = (err, req, res, next) => {
  const errStatusCode = err.statusCode || 500;

  const errMessage = errStatusCode === 500 ? SERVER_ERROR : err.message;

  res.status(errStatusCode).send({ message: errMessage });
  next();
};
