"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _PccSchema = require("../schema/PccSchema");

var PccSchema = new _mongoose["default"].Schema(_PccSchema.PccObject, {
  timestamps: true
});
module.exports = _mongoose["default"].model("Pcc", PccSchema);