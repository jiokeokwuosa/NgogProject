"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _auth = _interopRequireDefault(require("./../db/models/auth.model"));

var _application = _interopRequireDefault(require("./../db/models/application.model"));

var UserServices =
/*#__PURE__*/
function () {
  function UserServices() {
    (0, _classCallCheck2["default"])(this, UserServices);
  }

  (0, _createClass2["default"])(UserServices, null, [{
    key: "generateToken",
    value: function generateToken(id, isAdmin, firstName) {
      var token = _jsonwebtoken["default"].sign({
        data: {
          id: id,
          isAdmin: isAdmin,
          firstName: firstName
        }
      }, process.env.SECRET || 'alternativeSecret', {
        expiresIn: '30d'
      });

      return token;
    }
  }, {
    key: "encrptPassword",
    value: function () {
      var _encrptPassword = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(password) {
        var pass;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _bcryptjs["default"].hash(password, 8);

              case 2:
                pass = _context.sent;
                return _context.abrupt("return", pass);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function encrptPassword(_x) {
        return _encrptPassword.apply(this, arguments);
      }

      return encrptPassword;
    }()
  }, {
    key: "verifyPassword",
    value: function () {
      var _verifyPassword = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(plainText, hashedText) {
        var isMatch;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _bcryptjs["default"].compare(plainText, hashedText);

              case 3:
                isMatch = _context2.sent;
                return _context2.abrupt("return", isMatch);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function verifyPassword(_x2, _x3) {
        return _verifyPassword.apply(this, arguments);
      }

      return verifyPassword;
    }()
  }, {
    key: "emailExist",
    value: function () {
      var _emailExist = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(emailAddress) {
        var condition, user;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                condition = {
                  email: emailAddress
                };
                _context3.next = 4;
                return _auth["default"].find(condition, function (err, User) {
                  if (err) console.log(err);
                });

              case 4:
                user = _context3.sent;
                return _context3.abrupt("return", user);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(500).json({
                  status: '500 Internal server error',
                  error: 'Error Checking email'
                }));

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }));

      function emailExist(_x4) {
        return _emailExist.apply(this, arguments);
      }

      return emailExist;
    }()
  }, {
    key: "userExist",
    value: function () {
      var _userExist = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res, next) {
        var condition;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                condition = {
                  userId: req.headers.payLoad.id
                };
                _context4.next = 4;
                return _application["default"].find(condition, function (err, User) {
                  if (err) console.log(err);
                  if (User.length) return res.status(409).json({
                    status: '409 Conflict',
                    error: 'You have already submitted an application'
                  });
                  return next();
                });

              case 4:
                _context4.next = 9;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", res.status(500).json({
                  status: '500 Internal server error',
                  error: 'Error Validating Email Address'
                }));

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));

      function userExist(_x5, _x6, _x7) {
        return _userExist.apply(this, arguments);
      }

      return userExist;
    }()
  }, {
    key: "getUserById",
    value: function () {
      var _getUserById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(id) {
        var condition, user;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                condition = {
                  _id: id
                };
                _context5.next = 4;
                return _auth["default"].find(condition, function (err, User) {
                  if (err) console.log(err);
                });

              case 4:
                user = _context5.sent;
                return _context5.abrupt("return", user);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", res.status(500).json({
                  status: '500 Internal server error',
                  error: 'Error Checking email'
                }));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }));

      function getUserById(_x8) {
        return _getUserById.apply(this, arguments);
      }

      return getUserById;
    }()
  }]);
  return UserServices;
}();

var _default = UserServices;
exports["default"] = _default;