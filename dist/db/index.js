"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var url = process.env.ATLAS_URL;

_mongoose["default"].connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

var connection = _mongoose["default"].connection;
connection.once('open', function () {
  console.log('MongoDB database connected successfully');
});