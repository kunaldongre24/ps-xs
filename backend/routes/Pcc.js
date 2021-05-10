import PccController from "../controllers/PccController";
import { PccObject } from "../schema/PccSchema";
const express = require("express");
const router = express.Router();

//create a new pcc
router.post("/", PccController.addPcc);
//get all the pcc
router.get("/", PccController.showPccs);
//show all the distinct category...
router.get("/category", PccController.showPccCategory);
//get the pcc category wise
router.get("/:category", PccController.showPcc);
//update the pcc using productId
router.put("/:pccId", PccController.updatePcc);
//delete the pcc using productId
router.delete("/:pccId", PccController.deletePcc);

module.exports = router;
