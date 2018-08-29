"use strict";

const router = require("express").Router();

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!

//should give a page with all campuses

router.get("./campuses", async (req, res, next) => {
  try {
    const gotAllCampuses = await Campuses.FindAll();
    res.json(gotAllCampuses);
  } catch (error) {
    next(error);
  }
});

//should display a page with all existing students, students component

router.get("./students", async (req, res, next) => {
  try {
    const gotAllStudents = await Students.FindAll();
    res.json(gotAllStudents);
  } catch (error) {
    next(error);
  }
});

//a route to serve up a single campus

router.get("./campuses/:campusId", async (req, res, next) => {
  try {
    const oneCampus = await Campuses.findById(req.params.campusId); // campusId is our campus.name
    res.json(oneCampus);
  } catch (error) {
    next(error);
  }
});

//a route for a single student

router.get("./students/:studentId", async (req, res, next) => {
  try {
    const oneStudent = await Students.findById(req.params.studentId);
    res.json(oneStudent);
    // there's no unique id to retreive
    //possible to create a combination of Students.firstName+Students.lastName?
  } catch (error) {
    next(error);
  }
});

//### Tier 3: Adding a Campus and Adding a Student

//a route to add a new campus
//on button 'add campus'

router.post("./campuses", async (req, res, next) => {
  try {
    const createdCampus = await Campuses.create(req.body);
    res.json(createdCampus); //stores in model Campuses
  } catch (error) {
    next(error);
  }
});

//a POST route to create a new student

router.post("./students", async (req, res, next) => {
  try {
    const createdStudent = await Students.create(req.body);
    res.json(createdStudent);
  } catch (error) {
    next(error);
  }
});

//important last route
router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
