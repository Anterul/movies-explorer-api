const routes = require('express').Router();
const cors = require('cors');
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');
const { validateRegister, validateLogin } = require('../utils/validators');

routes.use('*', cors());

routes.post('/signin', validateLogin, login);
routes.post('/signup', validateRegister, createUser);

routes.use(auth);

routes.use('/users', require('./users'));
routes.use('/movies', require('./movies'));

module.exports = { routes };
