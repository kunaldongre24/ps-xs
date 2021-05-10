"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("../../config"));

var _logger = _interopRequireDefault(require("../logger"));

_mongoose["default"].Promise = global.Promise;

var connection = _mongoose["default"].connect(_config["default"].database.uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

connection.then(function (db) {
  _logger["default"].info("Successfully connected to the database..");

  return db;
})["catch"](function (err) {
  if (err.message.code === "ETIMEDOUT") {
    _logger["default"].info("Attempting to re-establish database connection.");

    _mongoose["default"].connect(_config["default"].database.uri);
  } else {
    _logger["default"].error("Error while attempting to connect to database:");

    _logger["default"].error(err);
  }
});
var _default = connection;
exports["default"] = _default;