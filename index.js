require("dotenv").config();
var Console = require("./handler/console");
var view = require("./handler/view");
var express = require("express");
var app = express();
app.use("/js", require("./routes/js"));
app.use("/api", require("./routes/api"));
app.use("/css", require("./routes/css"));
app.get("/", function (req, res) {
    res.sendFile(view("index"));
});
app.listen(process.env.PORT || 3002, function (err) {
    err != null
        ? Console.err(err)
        : Console.success("Application is Running on Port ".concat(process.env.PORT || 3002));
});
