const express = require("express");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const methodOverride = require('method-override')

const app = express();

const tasksRoutes = require('./routes/tasks_routes.js'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set("view engine", "pug");

app.use(tasksRoutes)



app.listen(3004);

// process.on("SIGINT", function () {
//   console.log("Adios - Atte. El servidor");
//   db.close();
//   process.exit();
// });
