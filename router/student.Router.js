const express = require("express");
const studentRouter = express.Router();
const studentSchema = require("../models/student.Moduls");

//update state of student
studentRouter.patch("/:id", async (req, res) => {
  try {
    const putStudent = await studentSchema.findOne({ _id: req.params.id });

    if (req.body.state) {
      putStudent.state = req.body.state;
    }

    await putStudent.save();
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

//show new student
studentRouter.get("/new", async (req, res) => {
  const newStudentsList = await studentSchema.find(
    { role: "student", state: "0" },
    {
      _id: 1,
      fullName: 1,
      age: 1,
      sexe: 1,
      hizb: 1,
      eduactionaLevel: 1,
      nationality: 1,
      country: 1,
      groupe: 1,
      narration: 1,
      email: 1,
    }
  );
  res.send(newStudentsList);
});

//update all data of student
studentRouter.patch("/update/:id", async (req, res) => {
  try {
    const putStudent = await studentSchema.findOne({
      _id: req.params.id,
      password: req.body.oldPassword,
    });
    if (putStudent) {
      putStudent.password = req.body.password;
      await putStudent.save();
      return res.send();
    } else return res.status(400).json({ message: "Password incorrect" });
  } catch (error) {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

//show info student
studentRouter.get("/info/:id", async (req, res) => {
  const newStudentsList = await studentSchema.find(
    { role: "student", state: "1", _id: req.params.id },
    {
      _id: 1,
      fullName: 1,
      age: 1,
      sexe: 1,
      hizb: 1,
      eduactionaLevel: 1,
      nationality: 1,
      country: 1,
      groupe: 1,
      narration: 1,
      email: 1,
      password: 1,
    }
  );
  res.send(newStudentsList);
});

module.exports = studentRouter;
