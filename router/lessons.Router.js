const express = require("express");
const lessonsRouter = express.Router();
const lessonsSchema = require("../models/lessons.Moduls");

//add new lessons
lessonsRouter.post("/", async (req, res) => {
  const AddLessons = new lessonsSchema({
    teacherId: req.body.teacherId,
    date: req.body.date,
    lessonLink: req.body.link,
    groupe: req.body.groupe,
  });
  await AddLessons.save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// show one Lesson
lessonsRouter.get("/:param", async (req, res) => {
  const param = req.params.param;

  const lesson = await lessonsSchema.find(
    {
      groupe: param,
    },
    {
      groupe: 1,
      lessonLink: 1,
    }
  );
  if (lesson) return res.send(lesson[0]);

  return res.sendStatus(404);
});

// show all Lessons admin && super admin
lessonsRouter.get("/", async (req, res) => {
  const lessons = await lessonsSchema.find(
    {},
    {
      groupe: 1,
      lessonLink: 1,
    }
  );
  if (lessons) return res.send(lessons);

  return res.sendStatus(404);
});

//delete lesson
lessonsRouter.delete("/:id", async (req, res) => {
  try {
    await lessonsSchema.deleteOne({ teacherId: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

//Update lesson
lessonsRouter.patch("/:id", async (req, res) => {
  try {
    const putLesson = await lessonsSchema.findOne({ _id: req.params.id });

    if (req.body.date) {
      putLesson.date = req.body.date;
    }
    if (req.body.time) {
      putLesson.time = req.body.time;
    }
    if (req.body.lessonLink) {
      putLesson.lessonLink = req.body.lessonLink;
    }

    await putLesson.save();
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

// show one Lesson
lessonsRouter.get("/teacher/:id", async (req, res) => {
  const param = req.params.id;
  const lesson = await lessonsSchema.find(
    {
      teacherId: param,
    },
    {
      _id: 0,
      lessonLink: 1,
    }
  );
  res.send(lesson[0]);
});

module.exports = lessonsRouter;
