var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(
  bodyParser.json({
    type(req) {
      return true;
    }
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  express.static(path.join(__dirname, 'public'), { extensions: ['html'] })
);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

var listener = app.listen(8080, function () {
  console.log('Listening on port ' + listener.address().port);
});
