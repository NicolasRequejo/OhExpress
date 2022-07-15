const S = require("sequelize");
const db = require("../db");


class User extends S.Model {}

User.init(
  {
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    name: {
      type: S.STRING,
      allowNull: false,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    }
  },
  { sequelize: db, modelName: "users" }
);


module.exports = User;

