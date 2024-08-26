const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  const sqlText = `SELECT * FROM "genres"
    ORDER BY "name"`;
  pool
    .query(sqlText)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log("SQL Error in GET/api/genres! ", dbErr);
    });
});

module.exports = router;
