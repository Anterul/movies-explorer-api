const {
  NODE_ENV,
  JWT_SECRET,
  DB_LINK = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  PORT = 3000,
} = process.env;

module.exports = {
  NODE_ENV,
  JWT_SECRET,
  DB_LINK,
  PORT,
};
