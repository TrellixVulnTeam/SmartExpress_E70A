require("dotenv").config();
var express = require("express");
var router = express.Router();
router.get("*", function (req, res) {
    var _path = req.headers.host + req.originalUrl;
    console.log(_path);
});
module.exports = router;
