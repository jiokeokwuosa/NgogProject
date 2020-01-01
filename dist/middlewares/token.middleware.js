"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

// eslint-disable-next-line consistent-return
var validateToken = function validateToken(req, res, next) {
  var _req$headers$token = req.headers.token,
      headerToken = _req$headers$token === void 0 ? null : _req$headers$token;
  var _req$body$token = req.body.token,
      bodyToken = _req$body$token === void 0 ? null : _req$body$token;
  var token = bodyToken || headerToken;
  if (!token) return res.status(401).json({
    status: '401 unauthorized',
    error: 'You must be Logged in to Proceed'
  });

  _jsonwebtoken["default"].verify(token, process.env.SECRET, function (error, result) {
    if (error) return res.status(401).json({
      status: '401 Unauthorized',
      error: 'Access token is Invalid'
    });
    req.headers.payLoad = result.data;
    req.headers.token = token;
    return next();
  });
};

var _default = validateToken;
exports["default"] = _default;