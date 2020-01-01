"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _application = _interopRequireDefault(require("../controllers/application.controller"));

var _user = _interopRequireDefault(require("./../services/user.service"));

var _token = _interopRequireDefault(require("./../middlewares/token.middleware"));

var _authorization = _interopRequireDefault(require("./../middlewares/authorization.middleware"));

var _uploadImage = _interopRequireDefault(require("./../middlewares/uploadImage.middleware"));

// import ApplicationValidation from './../middlewares/application.middleware';
var router = (0, _express.Router)();
router.post('/add', _token["default"], //  ApplicationValidation.validateData(),
//  ApplicationValidation.myValidationResult,
_user["default"].userExist, _uploadImage["default"].upload, _application["default"].createApplication);
router.get('/', _token["default"], _authorization["default"], _application["default"].getApplications);
var _default = router;
exports["default"] = _default;