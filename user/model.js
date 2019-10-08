const Sequelize = require("sequelize");

const db = require("../db");

const User = db.define(
  "user",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      select: false
    }
  },
  {
    timestamps: false,
  }
);

module.exports = User;