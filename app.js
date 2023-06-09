const { errors } = require('celebrate');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const limiter = require('./utils/rateLimiter');
const { routes } = require('./routes/index');
// const { requestLogger, errorLogger } = require('./middlewares/logger'); // логгер для разработки
const { errorHandler } = require('./middlewares/errorHandler');
const NotFound = require('./utils/errors/NotFound'); // 404
const { DB_LINK, PORT } = require('./utils/envConstants');
const { NON_EXISTENT_ROUTE } = require('./utils/messageConstants');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(DB_LINK);

// app.use(requestLogger); // логгер запросов для разработки
app.use(limiter);
app.use(helmet());
app.use(routes);
app.use('*', (req, res, next) => { next(new NotFound(NON_EXISTENT_ROUTE)); });
// app.use(errorLogger); // логгер ошибок для разработки
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
