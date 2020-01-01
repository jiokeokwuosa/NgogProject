"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _path = require("path");

var _dotenv = require("dotenv");

var _routes = _interopRequireDefault(require("./routes"));

require("./db");

(0, _dotenv.config)();
var app = (0, _express["default"])();
var port = process.env.PORT || 5000; // app.use(cors());

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use('/api/v1', _routes["default"]);

if (app.get('env') === 'production') {
  console.log('Production activated');
  var clientDir = (0, _path.join)(__dirname, '../client/build');
  app.use(_express["default"]["static"](clientDir));
  app.get('*', function (req, res) {
    return res.sendFile(clientDir + '/index.html');
  });
}

app.listen(port, function () {
  console.log("Server running at port ".concat(port));
});