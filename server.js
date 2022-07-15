const express = require("express");
const { json } = require("stream/consumers");
const app = express();
const morgan = require("morgan");
const db= require('./db')
require("./models/Users")
const routes = require("./routes")

app.use(express.json());
app.use(morgan("tiny"));

app.use("/",routes)


db.sync({ force: false }).then(() => {
    console.log('Base de datos conectada')
  app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
  });
});
