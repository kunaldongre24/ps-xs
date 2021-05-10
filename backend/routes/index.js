import pccRoute from "./Pcc";
const express = require("express");
const router = express.Router();

/* GET home page. */
router.use("/pcc", pccRoute);
module.exports = router;
