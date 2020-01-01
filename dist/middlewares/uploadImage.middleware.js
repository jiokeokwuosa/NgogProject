"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _multer = _interopRequireDefault(require("multer"));

var _mycloudinary = require("./../helpers/mycloudinary");

var ImageUpload =
/*#__PURE__*/
function () {
  function ImageUpload() {
    (0, _classCallCheck2["default"])(this, ImageUpload);
  }

  (0, _createClass2["default"])(ImageUpload, null, [{
    key: "upload",
    value: function upload(req, res, next) {
      var multerUpload = (0, _multer["default"])({
        storage: _mycloudinary.storage,
        limits: {
          files: 2
        }
      }).array('imageUrl');
      multerUpload(req, res, function (error) {
        if (error instanceof _multer["default"].MulterError) {
          return res.status(400).json({
            status: '400 Bad Request',
            error: 'Image should not exceed 900kb'
          });
        }

        if (error) return res.status(400).json({
          status: '400 Bad Request',
          error: 'Invalid File Format'
        });

        if (req.files) {
          req.body.imageUrl = req.files[0].url;
          req.body.fileUrl = req.files[1].url;
        }

        return next();
      });
    }
  }]);
  return ImageUpload;
}();

exports["default"] = ImageUpload;