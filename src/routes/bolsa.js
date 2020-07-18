const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database");

router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * FROM Bolsa", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT * FROM Bolsa WHERE id_bolsa = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});

router.post("/addBolsa", (req, res) => {
  // const {tamanio} = req.body;

  const bolsaObj = {
    tamanio: req.body.tamanio,
  };
  const sql = "INSERT INTO Bolsa SET ?";
  mysqlConnection.query(sql, bolsaObj, (err) => {
    if (!err) {
      res.json({ Status: "Bolsa agregada" });
    } else {
      console.log(err);
    }
  });
});

router.put("/updateBolsa/:id", (req, res) => {
  const { id } = req.params;
  const { tamanio } = req.body;
  const sql = `UPDATE Bolsa SET tamanio = '${tamanio}' WHERE id_bolsa = ${id}`;

  connection.query(sql, (err) => {
    if (!err) {
        res.json({ Status: "Bolsa Modificada" });
      } else {
        console.log(err);
      }
  });
});

router.delete("/deleteBolsa/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM Bolsa WHERE id_bolsa = ${id}`;

  connection.query(sql, (err) => {
    if (!err) {
        res.json({ Status: "Bolsa Eliminada" });
      } else {
        console.log(err);
      }
  });
});

module.exports = router;
