var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var usersRouter = require('./routes/users');
var pokemonsRouter = require('./routes/pokemons');
var authRouter = require('./routes/auth');

// Passport
const passport = require('passport');
require('./auth/config');

var app = express();

// Récupération de la base de données.
var dbConnection = require('./data/dbConnection');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(cors());

app.use('/users', usersRouter);
app.use('/pokemons', pokemonsRouter);
app.use('/auth', authRouter);

dbConnection.initialize();

module.exports = app;
