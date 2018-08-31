"use strict";

const db = require("./database");
const Sequelize = require("sequelize");

// const User = require("./user"); //need?

const Campuses = db.define("campuses", {
  name: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.BLOB,
    defaultValue: ".img" // what def val?
  },
  address: {
    type: Sequelize.TEXT, //not req?
  },
  description: {
    type: Sequelize.TEXT //whats the length
  }
});

module.exports = Campuses;
