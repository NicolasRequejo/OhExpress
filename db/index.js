const S = require("sequelize")


const db = new S("ohExpress",null,null,{
    host: "localhost",
    dialect: "postgres",
    logging: false
});

module.exports = db