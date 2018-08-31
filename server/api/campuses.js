"use strict";

const express = require("express");
const campusesAPI = express.Router();

module.exports = (function() {
  "use strict";

  console.log("rendering");
  campusesAPI.get("/campuses", async (req, res, next) => {
    try {
      // const gotAllCampuses = await Campuses.FindAll();
      // res.json(gotAllCampuses);

      res.json([
        {
          campusName: "ABC Campus",
          students: 5
        },
        {
          campusName: "XYZ Campus",
          students: 10
        }
      ]);
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
    })
    } catch (error) {
      next(error);
    }
  });

//   //### Tier 3: Adding a Campus and Adding a Student

//   //a route to add a new campus
//   //on button 'add campus'

//   campusesAPI.post("/campuses", async (req, res, next) => {
//     try {
//       const createdCampus = await Campuses.create(req.body);
//       res.json(createdCampus); //stores in model Campuses
//     } catch (error) {
//       next(error);
//     }
//   });

  return campusesAPI;
})();




