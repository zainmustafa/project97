"use strict";

const db = require("./database");
const Students = require("./students");
const Campuses = require("./campuses");
// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models (which you should define in separate modules in this directory).
// Example:
//
// const Puppy = require('./puppy')
// const Owner = require('./owner')

// After you've required all of your models into this module, you should establish
// associations (https://sequelize-guides.netlify.com/association-types/) between them here as well!
// Example:
//
// Puppy.belongsTo(Owner)

//association
//Students may be associated with at most one campus.
//campuses may be associated with many students.
Students.hasOne(Campuses);
Campuses.hasMany(Students);
module.exports = {
  // Include your models in this exports object as well!
  Campuses,
  Students,
  db
};
