"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _application = _interopRequireDefault(require("./../db/models/application.model"));

var _auth = _interopRequireDefault(require("./../db/models/auth.model"));

var _user = _interopRequireDefault(require("./../services/user.service"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ApplicationController =
/*#__PURE__*/
function () {
  function ApplicationController() {
    (0, _classCallCheck2["default"])(this, ApplicationController);
  }

  (0, _createClass2["default"])(ApplicationController, null, [{
    key: "createApplication",
    value: function () {
      var _createApplication = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var userId, _req$body, position, department, dateOfEmployment, employmentNo, phone, imageUrl, fileUrl, games, newApplication;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                userId = req.headers.payLoad.id;
                _req$body = req.body, position = _req$body.position, department = _req$body.department, dateOfEmployment = _req$body.dateOfEmployment, employmentNo = _req$body.employmentNo, phone = _req$body.phone, imageUrl = _req$body.imageUrl, fileUrl = _req$body.fileUrl, games = _req$body.games;
                newApplication = {
                  userId: userId,
                  position: position,
                  department: department,
                  dateOfEmployment: dateOfEmployment,
                  employmentNo: employmentNo,
                  phone: phone,
                  imageUrl: imageUrl,
                  fileUrl: fileUrl,
                  games: games
                };
                _context.next = 6;
                return _application["default"].create(_objectSpread({}, newApplication), function (err, createdApplication) {
                  if (err) console.log(err);
                  return res.status(201).json({
                    status: 'success',
                    data: createdApplication
                  });
                });

              case 6:
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).json({
                  status: '500 Internal server error',
                  error: 'Error Creating new Application'
                }));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function createApplication(_x, _x2) {
        return _createApplication.apply(this, arguments);
      }

      return createApplication;
    }()
  }, {
    key: "getApplications",
    value: function () {
      var _getApplications = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var result, response;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _application["default"].find().populate('userId');

              case 3:
                result = _context2.sent;
                response = result.map(function (item) {
                  return {
                    name: "".concat(item.userId.lastName, " ").concat(item.userId.firstName),
                    email: item.userId.email,
                    department: item.department,
                    position: item.position,
                    games: item.games,
                    imageUrl: item.imageUrl,
                    fileUrl: item.fileUrl
                  };
                });
                return _context2.abrupt("return", res.status(200).json({
                  status: 'success',
                  data: response
                }));

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(500).json({
                  status: '500 Internal server error',
                  error: 'Error getting applications'
                }));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      function getApplications(_x3, _x4) {
        return _getApplications.apply(this, arguments);
      }

      return getApplications;
    }()
  }]);
  return ApplicationController;
}();

var _default = ApplicationController;
exports["default"] = _default;