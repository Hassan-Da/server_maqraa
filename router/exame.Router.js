const express = require("express");
const exameRouter = express.Router();
const exameSchema = require("../models/exame.Moduls");

//show data teacher (exame)
exameRouter.get("/:teacherID", async (req, res) => {
  const teacherId = req.params.teacherID;
  const listExame = await exameSchema.find(
    { teacherId: teacherId },
    {
      title: 1,
      date: 1,
    }
  );
  res.send(listExame);
});

// post new exame
exameRouter.post("/", async (req, res) => {
  const newExame = new exameSchema({
    teacherId: req.body.teacherId,
    title: req.body.title,
    date: req.body.date,
    groupe: req.body.groupe,
  });
  await newExame
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// show list exame in student role
exameRouter.get("/:groupe", async (req, res) => {
  const exameStudent = await exameSchema.find(
    {
      groupe: req.params.groupe,
    },
    {
      title: 1,
      date: 1,
    }
  );
});

module.exports = exameRouter;
