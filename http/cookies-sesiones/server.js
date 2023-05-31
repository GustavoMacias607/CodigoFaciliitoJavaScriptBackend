const express = require("express");
const cookeSesion = require("cookie-session");

const app = express();

app.use(
  cookeSesion({
    name: "session",
    keys: ["asdasdasd", "assdasdaaaadds"],
  })
);

app.get("/", function (req, res) {
  req.session.visits = req.session.visits || 0;
  req.session.visits = req.session.visits + 1;
  res.send(`${req.session.visits} visita(s)`);
});

app.listen(3002);
