const express = require("express");
const userRouter = express.Router();
const userSchema = require("../models/user.Moduls");

//show all admin
userRouter.get("/admins", async (req, res) => {
  const adminList = await userSchema.find(
    { role: "admin" },
    { _id: 1, fullName: 1, email: 1, password: 1, phone: 1 }
  );
  res.send(adminList);
});

//show all teacher
userRouter.get("/teachers", async (req, res) => {
  const teacherList = await userSchema.find(
    { role: "teacher" },
    { _id: 1, fullName: 1, email: 1, password: 1, phone: 1, groupe: 1 }
  );
  res.send(teacherList);
});

//add user (admin && teacher)
userRouter.post("/", async (req, res) => {
  const addUser = new userSchema({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    groupe: req.body.groupe,
    role: req.body.role,
  });
  const post = await userSchema.findOne({ email: addUser.email }, {});
  if (post) {
    return res.status(404).send();
  }
  await addUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//update user (admin && teacher)  users/${id}
userRouter.patch("/:id", async (req, res) => {
  try {
    const putUser = await userSchema.findOne({ _id: req.params.id });

    if (req.body.fullName) {
      putUser.fullName = req.body.fullName;
    }
    if (req.body.email) {
      putUser.email = req.body.email;
    }
    if (req.body.password) {
      putUser.password = req.body.password;
    }
    if (req.body.phone) {
      putUser.phone = req.body.phone;
    }
    if (req.body.groupe) {
      putUser.groupe = req.body.groupe;
    }
    if (req.body.role) {
      putUser.role = req.body.role;
    }

    await putUser.save();
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

//delete user (admin && teacher && student)
userRouter.delete("/:id", async (req, res) => {
  try {
    await userSchema.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

module.exports = userRouter;
