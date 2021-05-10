"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _index = _interopRequireDefault(require("./routes/index"));

var _compression = _interopRequireDefault(require("compression"));

var _morgan = _interopRequireDefault(require("morgan"));

var express = require("express");

var app = express();

var connection = require("./utils/db");

var cors = require("cors");

app.use(cors()); // Use this after the variable declaration

app.use((0, _compression["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use("/api/v1/", _index["default"]); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
});
var port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log("Listening on port ".concat(port, "..."));
});