const Pcc = require("../models/Pcc");
const PccController = {
  // READ ALL
  async showPccs(req, res) {
    try {
      const pccs = await Pcc.find();
      res.json(pccs);
    } catch (err) {
      res.json({ message: err });
    }
  },
  //READ ONE
  async showPcc(req, res) {
    try {
      const pccs = await Pcc.find({ nationality: req.params.category });
      res.json(pccs);
    } catch (err) {
      res.json({ message: err });
    }
  },
  // CREATE ONE
  async addPcc(req, res) {
    const pcc = Pcc(req.body);
    try {
      const addPcc = await pcc.save();
      res.json(addPcc);
    } catch (err) {
      res.json({ message: err });
    }
  },
  async updatePcc(req, res) {
    try {
      const updatePcc = await Pcc.updateOne(
        { _id: req.params.pccId },
        { $set: req.body }
      );
      res.json(updatePcc);
    } catch (err) {
      res.json({ message: err });
    }
  },
  //deleting pccs
  async deletePcc(req, res) {
    try {
      const removePcc = await Pcc.deleteOne({ _id: req.params.pccId });
      res.json({ message: "Success" });
    } catch (err) {
      res.json({ message: err });
    }
  },
  async showPccCategory(req, res) {
    try {
      const pccCategory = await Pcc.distinct("nationality");
      res.json(pccCategory);
    } catch (err) {
      res.json({ message: err });
    }
  },
};

export default PccController;
