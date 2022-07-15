const express = require("express")
const Router = express.Router();
const userRoutes = require("./user")

Router.use("/users", userRoutes)



module.exports = Router

// Vamos los cuatro tipo de verbo o pedidos http get : trae info. post: envia info. put: modifica info. Delete: borra