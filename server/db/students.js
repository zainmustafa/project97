"use strict";

const db = require("./database");
const Sequelize = require("sequelize");

//const User = require("./user"); //need?

const Students = db.define("students", {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING //or text
  },
  imageUrl: {
    type: Sequelize.BLOB, // what def val?
    defaultValue: Sequelize.BLOB
  },
  gpa: { type: Sequelize.STRING }
  //need function?
  //const range = [{value: sequelize.decimal(0.0)}, {value: sequelize.decimal(4.0)}]
});

module.exports = Students;
