"use strict";

const express = require("express");
const studentsAPI = express.Router();

const models = require("../db/index");
const Students = models.Students;

module.exports = (function() {
  "use strict";

  //should display a page with all existing students, students component

  studentsAPI.get("/students", async (req, res, next) => {
    try {
      const gotAllStudents = await Students.findAll();
      res.json(gotAllStudents);

      // res.json([
      //   {
      //     studentName: "ABC Student"
      //   },
      //   {
      //     studentName: "XYZ Student"
      //   }
      // ]);
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

  // edit student
  studentsAPI.put("/students", async (req, res, next) => {
    try {
      const campus = await Students.findById(req.body.id);
      if (campus) {
        Students.update(
          {
            name: req.body.name,
            email: req.body.email,
            imageUrl: req.body.imageUrl,
            gpa: req.body.gpa
          },
          { where: { id: req.body.id } }
        ).then(function(updatedStudent) {
          res.json(updatedStudent);
        });
      }
    } catch (error) {
      next(error);
    }
  });

  studentsAPI.delete("/students", async (req, res, next) => {
    try {
      Students.find({
        where: { id: req.body.id }
      }).then(function(result) {
        return Students.destroy({ where: { id: req.body.id } }).then(u => {
          return res.json({ success: true });
        });
      });
    } catch (error) {
      next(error);
    }
  });

  //a POST route to create a new student

  studentsAPI.post("/students", async (req, res, next) => {
    try {
      const createdStudent = await Students.create(req.body);
      return res.json(createdStudent); //stores in model Students
    } catch (error) {
      next(error);
    }
  });

  return studentsAPI;
})();
