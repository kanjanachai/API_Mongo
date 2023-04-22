var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var idcardRouter = require('./routes/idcard');

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://superdev:lin2357649@1913110191-lin.5grblxi.mongodb.net/API_Mongo')
}

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/idcard', idcardRouter);

module.exports = app;
