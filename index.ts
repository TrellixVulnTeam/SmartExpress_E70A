require("dotenv").config();

const view = require("./handler/view");
const express = require("express");
const app = express();

app.use("/js", require("./routes/js"));
app.use("/css", require("./routes/css"));

app.get("/", function (req, res) {
  res.sendFile(view(`index`));
});

app.listen(3000);
