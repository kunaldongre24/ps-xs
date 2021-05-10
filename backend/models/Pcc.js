import mongoose from "mongoose";
import { PccObject } from "../schema/PccSchema";

const PccSchema = new mongoose.Schema(PccObject, { timestamps: true });
module.exports = mongoose.model("Pcc", PccSchema);
