const express = require("express");
const memorizeSchema = require("../models/memorize.Moduls");
const absenceSchema = require("../models/absence.Moduls");
const reviewSchema = require("../models/review.Moduls");
const studentSchema = require("../models/student.Moduls");

const listRouter = express.Router();

//----------------------------------------------------absence--------------------------
//show absence student by id
listRouter.get("/absence/:studentId", async (req, res) => {
  const id = req.params.studentId;
  const absenceList = await absenceSchema.find(
    {
      studentId: id,
    },
    {
      _id: 0,
      date: 1,
      absenceHrs: 1,
    }
  );
  res.send(absenceList);
});

//Add new absence student by id
listRouter.post("/absence", async (req, res) => {
  const newAbsence = new absenceSchema({
    studentId: req.body.studentId,
    date: req.body.date,
    absenceHrs: req.body.absenceHrs,
  });
  await newAbsence
    .save()
    .then(() => {
      return res.status(200).send();
    })
    .catch((err) => {
      return res.json(err);
    });
});

//-----------------------------------------------Memorize---------------------------------------------------------
//show memorize student by id
listRouter.get("/memorization/:studentId", async (req, res) => {
  const id = req.params.studentId;
  const memorizeList = await memorizeSchema.find(
    {
      studentId: id,
    },
    {
      date: 1,
      memorizedHizb: 1,
    }
  );
  res.send(memorizeList);
});

//Add new  Memorize student by id
listRouter.post("/memorization", async (req, res) => {
  const newMemorize = new memorizeSchema({
    studentId: req.body.studentId,
    date: req.body.date,
    memorizedHizb: req.body.memorizedHizb,
  });
  await newMemorize
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//----------------------------------------------------review--------------------------
//show review student by id
listRouter.get("/review/:studentId", async (req, res) => {
  const id = req.params.studentId;
  const reviewObj = await reviewSchema.find(
    {
      studentId: id,
    },
    {
      date: 1,
      reviewedHizb: 1,
      rating: 1,
    }
  );
  res.send(reviewObj);
});

//Add new review student by id
listRouter.post("/review", async (req, res) => {
  const newReview = new reviewSchema({
    studentId: req.body.studentId,
    date: req.body.date,
    reviewedHizb: req.body.reviewedHizb,
    rating: req.body.rating,
  });
  await newReview
    .save()
    .then((data) => {
      res.json(data).status(200);
    })
    .catch((err) => {
      res.json(err);
    });
});

//-------------------------------------------------------------------------------------
//show student teacher role
listRouter.get("/listStudent/:param", async (req, res) => {
  if (req.params.param === "all") {
    const newStudentsList = await studentSchema.find(
      { role: "student", state: "1" },
      {
        _id: 1,
        fullName: 1,
      }
    );

    return res.send(newStudentsList);
  } else {
    const newStudentsList = await studentSchema.find(
      { role: "student", state: "1", groupe: req.params.param },
      {
        _id: 1,
        fullName: 1,
      }
    );
    return res.send(newStudentsList);
  }
});

module.exports = listRouter;
