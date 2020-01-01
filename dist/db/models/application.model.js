"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var applicationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Auth'
  },
  position: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  dateOfEmployment: {
    type: String,
    required: true
  },
  employmentNo: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  games: {
    type: Array,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

var application = _mongoose["default"].model('Application', applicationSchema);

var _default = application;
exports["default"] = _default;