"use strict";

const express = require("express");
const campusesAPI = express.Router();

const models = require("../db/index");
const Campuses = models.Campuses;

module.exports = (function() {
  "use strict";

  campusesAPI.get("/campuses", async (req, res, next) => {
    try {
      const gotAllCampuses = await Campuses.findAll();
      res.json(gotAllCampuses);

      // res.json([
      //   {
      //     campusName: "ABC Campus",
      //     students: 5
      //   },
      //   {
      //     campusName: "XYZ Campus",
      //     students: 10
      //   }
      // ]);
    } catch (error) {
      next(error);
    }
  });

  //should give a page with all campuses

  //a route to serve up a single campus

  campusesAPI.get("/campuses/:campusId", async (req, res, next) => {
    try {
      //   const oneCampus = await Campuses.findById(req.params.campusId); // campusId is our campus.name
      //   res.json(oneCampus);

      res.json({
        location: "ABC Road",
        image: "",
        name: "ABC Campus",
        description: "Campus Description"
      });
    } catch (error) {
      next(error);
    }
  });

  campusesAPI.put("/campuses", async (req, res, next) => {
    console.log(req.body);
    try {
      const campus = await Campuses.findById(req.body.id); // campusId is our campus.name
      if (campus) {
        Campuses.update(
          {
            location: req.body.address,
            image: req.body.imageUrl,
            name: req.body.name,
            description: req.body.description
          },
          { where: { id: req.body.id } }
        ).then(function(updatedCampus) {
          res.json(updatedCampus);
        });
      }
    } catch (error) {
      next(error);
    }
  });

  campusesAPI.delete("/campuses", async (req, res, next) => {
    console.log(req.body);
    try {
      Campuses.find({
        where: { id: req.body.id }
      }).then(function(result) {
        return Campuses.destroy({ where: { id: req.body.id } }).then(u => {
          return res.json({success: true});
        });
      });

    } catch (error) {
      next(error);
    }
  });

  //   //### Tier 3: Adding a Campus and Adding a Student

  //   //a route to add a new campus
  //   //on button 'add campus'

  campusesAPI.post("/campuses", async (req, res, next) => {
    try {
      console.log(req.body);
      const createdCampus = await Campuses.create(req.body);
      res.json(createdCampus); //stores in model Campuses

      // res.json([
      //   {
      //     campusName: "ABC Campus",
      //     students: 5
      //   },
      //   {
      //     campusName: "XYZ Campus",
      //     students: 10
      //   }
      // ]);
    } catch (error) {
      next(error);
    }
  });

  return campusesAPI;
})();
