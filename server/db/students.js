"use strict";

const db = require("./database");
const Sequelize = require("sequelize");

//const User = require("./user"); //need?

const Students = db.define("students", {
  firstName: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true,
      notNull: true
    }
  },
  lastName: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true,
      notNull: true
    }
  },
  email: {
    type: Sequelize.STRING, //or text
    validate: { isEmail: true }
  },
  imageUrl: {
    type: Sequelize.BLOB, // what def val?
    defaultValue: Sequelize.BLOB
  },
  gpa: { type: Sequelize.RANGE(Sequelize.DECIMAL) }
  //need function?
  //const range = [{value: sequelize.decimal(0.0)}, {value: sequelize.decimal(4.0)}]
});

module.exports = Students;
