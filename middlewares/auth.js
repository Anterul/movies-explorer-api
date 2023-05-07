require('dotenv').config();
const jwt = require('jsonwebtoken');
const Unauthorized = require('../utils/errors/Unauthorized'); // 401
const { NODE_ENV, JWT_SECRET } = require('../utils/envConstants');
const { AUTH_REQUIRED } = require('../utils/messageConstants');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new Unauthorized(AUTH_REQUIRED));
  }

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    return next(new Unauthorized(AUTH_REQUIRED));
  }

  req.user = payload;

  return next();
};
