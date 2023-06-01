const express = require("express");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = new Sequelize("proyecto-backend", null, null, {
  dialect: "sqlite",
  storage: "./proyecto-backend",
});

app.post("/pendientes", function (req, res) {
  //   db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description);
  res.send("Insersion finalizada");
});

app.listen(3004);

// process.on("SIGINT", function () {
//   console.log("Adios - Atte. El servidor");
//   db.close();
//   process.exit();
// });
