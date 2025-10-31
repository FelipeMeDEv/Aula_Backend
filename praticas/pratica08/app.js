require("dotenv").config();
var express = require('express');
// var path = require('path');
// var cookieparser = require('cookie-parser');
var logger = require('morgan');
var usuariosrouter = require('./routes/usuariosrouter');

var produtosrouter = require('./routes/produtosrouter');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use('/usuarios', usuariosrouter);
app.use('/produtos', produtosrouter);
// app.use(express.static(path.join(__dirname, 'public')));



// ,---------------------------,
// |  /---------------------\  |
// | |                       | |
// | |     Da ponto          | |
// | |      Pela Arte         | |
// | |       FelipeM         | |
// | |                       | |
// |  \_____________________/  |
// |___________________________|
// ,---\_____     []     _______/------,
// /         /______________\           /|
// /___________________________________ /  | ___
// |                                   |   |    )
// |  _ _ _                 [-------]  |   |   (
// |  o o o                 [-------]  |  /    _)_
// |__________________________________ |/     /  /
// /-------------------------------------/|      ( )/
// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /
// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

module.exports = app;
