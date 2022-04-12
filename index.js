require("dotenv").config();
var view = require("./handler/view");
var express = require("express");
var app = express();
app.use("/js", require("./routes/js"));
app.use("/css", require("./routes/css"));
app.get("/", function (req, res) {
    res.sendFile(view("index"));
});
app.listen(3000);
