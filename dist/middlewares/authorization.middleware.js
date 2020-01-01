"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var authorize = function authorize(req, res, next) {
  var payLoad = req.headers.payLoad;
  if (!payLoad.isAdmin) return res.status(401).json({
    status: '401 unauthorized',
    error: 'You must be an Admin to proceed'
  });
  return next();
};

var _default = authorize;
exports["default"] = _default;