const Task = require("../models").Task;

module.exports = {
  index: function (req, res) {
    Task.findAll().then((tasks) => {
      res.render("tasks/index", { tasks: tasks });
    });
  },

  create: function (req, res) {
    Task.create({
      description: req.body.description,
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  destroy: function (req, res) {
    Task.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (contradorElementosEliminador) {
      res.redirect("/tasks");
    });
  },
  show: function (req, res) {
    Task.findById(req.params.id).then(function (task) {
      res.render("tasks/show", { task });
    });
  },
  edit: function (req, res) {
    Task.findById(req.params.id).then(function (task) {
      res.render("tasks/edit", { task });
    });
  },
  update: function (req, res) {
    Task.update(
      { description: req.body.description },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(function (response) {
      res.redirect("/tasks/" + req.params.id);
    });
  },
  new: function (req, res) {
    res.render("tasks/new");
  },
};
