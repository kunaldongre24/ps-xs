import db from "../db";

const PccController = {
  // READ ALL
  showPccs(req, res) {
    const sql = `SELECT * FROM user`;
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  //READ ONE
  showPcc(req, res) {
    const sql = `SELECT * FROM user WHERE nationality='${req.params.category}'`;
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  // CREATE ONE
  addPcc(req, res) {
    const user = req.body;
    const sql = `INSERT INTO user SET ?`;
    let query = db.query(sql, user, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  updatePcc(req, res) {
    const user = req.body;
    const sql = `UPDATE user SET ? WHERE id = '${req.params.pccId}'`;
    let query = db.query(sql, user, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  //deleting pccs
  deletePcc(req, res) {
    const sql = `DELETE FROM user WHERE id = '${req.params.pccId}'`;
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  showPccCategory(req, res) {
    const sql = `SELECT DISTINCT nationality FROM user;`;
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};

export default PccController;
