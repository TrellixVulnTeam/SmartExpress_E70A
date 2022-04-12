require("dotenv").config();

const express = require("express");
const router = express.Router();

router.get("*", function (req, res) {
  const _path = req.headers.host + req.originalUrl;
  console.log(_path);
});

module.exports = router;
