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

var _expressValidator = require("express-validator");

var Application =
/*#__PURE__*/
function () {
  function Application() {
    (0, _classCallCheck2["default"])(this, Application);
  }

  (0, _createClass2["default"])(Application, null, [{
    key: "validateData",
    value: function validateData() {
      return [(0, _expressValidator.check)('position').exists().withMessage('Position is Required').not().isEmpty().withMessage('Position cannot be empty'), (0, _expressValidator.check)('department').exists().withMessage('Department is Required').not().isEmpty().withMessage('Department cannot be empty'), (0, _expressValidator.check)('employmentDate').exists().withMessage('Employment Date is Required').not().isEmpty().withMessage('Employment Date cannot be empty'), (0, _expressValidator.check)('employmentNo').exists().withMessage('Employment Number is Required').not().isEmpty().withMessage('Employment Number cannot be empty'), (0, _expressValidator.check)('phoneNumber').exists().withMessage('Phone Number is Required').not().isEmpty().withMessage('Phone Number cannot be empty'), (0, _expressValidator.check)('games').exists().withMessage('Sports  is Required').not().isEmpty().withMessage('Sports cannot be empty')];
    }
  }, {
    key: "myValidationResult",
    value: function () {
      var _myValidationResult = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res, next) {
        var errors, errArr;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                errors = (0, _expressValidator.validationResult)(req);

                if (errors.isEmpty()) {
                  _context.next = 4;
                  break;
                }

                errArr = errors.array().map(function (_ref) {
                  var msg = _ref.msg;
                  return msg;
                });
                return _context.abrupt("return", res.status(400).json({
                  status: '400 Invalid Request',
                  error: 'Your request contains invalid parameters',
                  errors: errArr
                }));

              case 4:
                return _context.abrupt("return", next());

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function myValidationResult(_x, _x2, _x3) {
        return _myValidationResult.apply(this, arguments);
      }

      return myValidationResult;
    }()
  }]);
  return Application;
}();

var _default = Application;
exports["default"] = _default;