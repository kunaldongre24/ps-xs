"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Pcc = _interopRequireDefault(require("./Pcc"));

var express = require("express");

var router = express.Router();
/* GET home page. */

router.use("/pcc", _Pcc["default"]);
module.exports = router;