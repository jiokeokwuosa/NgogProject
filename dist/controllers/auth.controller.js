"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _auth = _interopRequireDefault(require("./../db/models/auth.model"));

var _user = _interopRequireDefault(require("./../services/user.service"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AuthController =
/*#__PURE__*/
function () {
  function AuthController() {
    (0, _classCallCheck2["default"])(this, AuthController);
  }

  (0, _createClass2["default"])(AuthController, null, [{
    key: "loadUser",
    value: function () {
      var _loadUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var token, user, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                token = req.headers.token;
                user = {
                  id: req.headers.payLoad.id,
                  isAdmin: req.headers.payLoad.isAdmin,
                  firstName: req.headers.payLoad.firstName
                };
                response = {
                  token: token,
                  user: user
                };
                return _context.abrupt("return", res.status(200).json({
                  status: 'success',
                  data: response
                }));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).json({
                  status: '500 Internal server error',
                  error: 'Error loading user'
                }));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function loadUser(_x, _x2) {
        return _loadUser.apply(this, arguments);
      }

      return loadUser;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var _req$body, email, password, user, confirmPassword, token, response;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _req$body = req.body, email = _req$body.email, password = _req$body.password;
                _context2.next = 4;
                return _user["default"].emailExist(email);

              case 4:
                user = _context2.sent;

                if (user.length) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", res.status(409).json({
                  status: '400 Invalid Request',
                  error: 'Invalid Email address'
                }));

              case 7:
                _context2.next = 9;
                return _user["default"].verifyPassword(password, user[0].password);

              case 9:
                confirmPassword = _context2.sent;

                if (confirmPassword) {
                  _context2.next = 12;
                  break;
                }

                return _context2.abrupt("return", res.status(409).json({
                  status: '400 Invalid Request',
                  error: 'Invalid Password'
                }));

              case 12:
                token = _user["default"].generateToken(user[0]._id, user[0].isAdmin, user[0].firstName);
                response = {
                  token: token,
                  user: {
                    id: user[0]._id,
                    firstName: user[0].firstName,
                    isAdmin: user[0].isAdmin
                  }
                };
                return _context2.abrupt("return", res.status(200).json({
                  status: 'success',
                  data: response
                }));

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(500).json({
                  status: '500 Internal server error',
                  error: 'Error Logging in user'
                }));

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 17]]);
      }));

      function login(_x3, _x4) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "signUp",
    value: function () {
      var _signUp = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var _req$body2, email, password, firstName, lastName, encryptpassword, newUser;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password, firstName = _req$body2.firstName, lastName = _req$body2.lastName;
                _context3.next = 4;
                return _user["default"].encrptPassword(password);

              case 4:
                encryptpassword = _context3.sent;
                newUser = {
                  email: email,
                  password: encryptpassword,
                  firstName: firstName,
                  lastName: lastName
                };
                _context3.next = 8;
                return _auth["default"].create(_objectSpread({}, newUser), function (err, createdUser) {
                  if (err) {
                    console.log(err);
                    throw new Error('Error Creating new User');
                  }

                  var id = createdUser._id,
                      isAdmin = createdUser.isAdmin,
                      firstName = createdUser.firstName;

                  var token = _user["default"].generateToken(id, isAdmin, firstName);

                  var response = {
                    token: token,
                    user: {
                      id: id,
                      firstName: firstName,
                      isAdmin: isAdmin
                    }
                  };
                  return res.status(201).json({
                    status: 'success',
                    data: response
                  });
                });

              case 8:
                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(500).json({
                  status: '500 Internal server error',
                  error: 'Error Creating new User'
                }));

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 10]]);
      }));

      function signUp(_x5, _x6) {
        return _signUp.apply(this, arguments);
      }

      return signUp;
    }()
  }]);
  return AuthController;
}();

var _default = AuthController;
exports["default"] = _default;