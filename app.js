var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var apartado1Router = require('./routes/apartado1');
var apartado2Router = require('./routes/apartado2');
var apartado3Router = require('./routes/apartado3');
var apartado4Router = require('./routes/apartado4');
var definicionesRouter = require('./routes/definiciones');
var infoutilRouter = require('./routes/infoutil');
var componentesRouter = require('./routes/componentes');
var tpsRouter = require ('./routes/tps');
var crmRouter = require ('./routes/crm');
var misRouter = require ('./routes/mis');
var pagina1Router = require('./routes/pagina1');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/apartado1',apartado1Router);
app.use('/apartado2',apartado2Router);
app.use('/apartado3',apartado3Router);
app.use('/apartado4',apartado4Router);
app.use('/definiciones',definicionesRouter);
app.use('/infoutil',infoutilRouter);
app.use('/componentes',componentesRouter);
app.use('/pagina1',pagina1Router);
app.use('/tps',tpsRouter);
app.use('/crm',crmRouter);
app.use('/mis',misRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
