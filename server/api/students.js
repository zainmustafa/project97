"use strict";

const express = require("express");
const studentsAPI = express.Router();

module.exports = (function() {
  "use strict";

  //should display a page with all existing students, students component

  studentsAPI.get("/students", async (req, res, next) => {
    try {
      // const gotAllStudents = await Students.FindAll();
      // res.json(gotAllStudents);

      res.json([
        {
          studentName: "ABC Student"
        },
        {
          studentName: "XYZ Student"
        }
      ]);
    } catch (error) {
      next(error);
    }
  });

  //a route for a single student

  studentsAPI.get("/students/:studentId", async (req, res, next) => {
    try {
      const oneStudent = await Students.findById(req.params.studentId);
      res.json(oneStudent);
      // there's no unique id to retreive
      //possible to create a combination of Students.firstName+Students.lastName?
    } catch (error) {
      next(error);
    }
  });

  //a POST route to create a new student

  studentsAPI.post("/students", async (req, res, next) => {
    try {
      const createdStudent = await Students.create(req.body);
      res.json(createdStudent);
    } catch (error) {
      next(error);
    }
  });

  return studentsAPI;
})();
