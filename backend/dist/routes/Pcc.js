"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _PccController = _interopRequireDefault(require("../controllers/PccController"));

var _PccSchema = require("../schema/PccSchema");

var express = require("express");

var router = express.Router(); //create a new pcc

router.post("/", _PccController["default"].addPcc); //get all the pcc

router.get("/", _PccController["default"].showPccs); //show all the distinct category...

router.get("/category", _PccController["default"].showPccCategory); //get the pcc category wise

router.get("/:category", _PccController["default"].showPcc); //update the pcc using productId

router.put("/:pccId", _PccController["default"].updatePcc); //delete the pcc using productId

router["delete"]("/:pccId", _PccController["default"].deletePcc);
module.exports = router;