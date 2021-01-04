const router = require("express").Router();
const Workout = require("../models/workout.js");

module.exports = function(app) {
  // get workouts
  app.get("/api/workouts", (req, res) => {
      Workout.find({})
      .then((workout) => {
          res.status(200).json(workout);
      })
      .catch((err) => {
          res.status(400).json(err);
      });
  });
  app.get("/api/workouts/range", (req, res) => {
      Workout.find({})
      .then((workout) => {
          res.status(200).json(workout);
      })
      .catch((err) => {
          res.status(400).json(err);
      });
  });
  // post workout
  app.post("/api/workouts", ({ body }, res) => {
      const workout = new Workout(body);

      Workout.create({_id: workout._id})
      .then(dbWorkout => res.json(dbWorkout))
      .catch(err => res.json(err));
  })

  // update workout
  app.put("/api/workouts/:id", async (req, res) => {
    Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
          $inc: { totalDuration: req.body.duration },
          $push: { exercises: req.body }
      },
      { new: true }).then(dbWorkout => {
          res.json(dbWorkout);
      }).catch(err => {
          res.json(err);
      });
  });
}
