"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("./auth.route"));

var _application = _interopRequireDefault(require("./application.route"));

var router = (0, _express.Router)();
router.use('/auth', _auth["default"]);
router.use('/application', _application["default"]);
var _default = router;
exports["default"] = _default;