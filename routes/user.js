const sequelize = require("sequelize");
const express = require("express");
const Users = require("../models/Users");
const Router = express.Router();

Router.post("/", (req, res) => {
  const { name, email, password } = req.body;
  Users.create({ name, email, password })
    .then((user) => res.status(201).send(user))
    .catch((error) => console.log(error));
});

Router.get("/all", (req, res) => {
  Users.findAll()
    .then((users) => res.status(200).send(users))
    .catch((error) => console.log(error));
});

Router.put("/:id", (req, res) => {
  //console.log("AAA",req.body,"BBB",req.params)

  Users.update(
    { name: req.body.name },
    { where: { id: req.params.id }, returning: true }
  )
    .then((newName) => {
      Users.findOne({ where: { id: req.params.id } }).then((newName) =>
        res.send(newName)
      );
    })
    .catch((error) => console.log(error));
});

Router.delete("/delete/:id", (req, res) => {
  Users.destroy({ where: { id: req.params.id } })
    .then((data) => res.sendStatus(204))
    .catch((err) => console.log(err));
});

Router.get("/unito", (req, res) => {
  Users.findOne({ where: { name: req.body.name } })
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
});

module.exports = Router