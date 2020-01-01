"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("./../controllers/auth.controller"));

var _signupValidation = _interopRequireDefault(require("./../middlewares/signupValidation.middleware"));

var _loginValidation = _interopRequireDefault(require("./../middlewares/loginValidation.middleware"));

var _token = _interopRequireDefault(require("./../middlewares/token.middleware"));

var router = (0, _express.Router)();
router.get('/user', _token["default"], _auth["default"].loadUser);
router.post('/login', _loginValidation["default"].validateData(), _loginValidation["default"].myValidationResult, _auth["default"].login);
router.post('/signup', _signupValidation["default"].validateData(), _signupValidation["default"].myValidationResult, _signupValidation["default"].EmailAlreadyExist, _auth["default"].signUp);
var _default = router;
exports["default"] = _default;