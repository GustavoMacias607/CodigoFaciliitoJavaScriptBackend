const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use('/public', express.static('assets', {
  etag: false,
  maxAge: '5h'
}));

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(3002);

//If-None-Match: W/"42-1886f1e8f18"
