const express = require("express");
const router = express.Router();
const singUpSchema = require("../models/signUp.Moduls");
const loginSchema = require("../models/login.Moduls");

//------------------------------------------------Rgistration-------------------------
//Register user
router.post("/register", async (req, res) => {
  const Email = req.body.email;

  const post = await singUpSchema.findOne({ email: Email }, {});

  if (post) {
    return res.status(403).send(); // Forbidden -- Not Allowed --
  } else {
    const singUp = new singUpSchema({
      fullName: req.body.fullName,
      age: req.body.age,
      sexe: req.body.sexe,
      hizb: req.body.hizb,
      eduactionaLevel: req.body.eduactionaLevel,
      nationality: req.body.nationality,
      country: req.body.country,
      groupe: req.body.groupe,
      type: req.body.type,
      narration: req.body.narration,
      email: req.body.email,
      password: req.body.password,
      state: req.body.state,
      role: req.body.role,
      subscription: req.body.subscription,
    });
    await singUp
      .save()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  }
});

//--------------------------------------------------Login----------------------------------------------
//login user
router.post("/login", async (req, res) => {
  const Email = req.body.email,
    Password = req.body.password;
  const post = await loginSchema.findOne({
    email: Email,
  });

  if (post) {
    if (post.password === Password) {
      if (Number(post.state) === 0) return res.status(401).send();

      return res.status(200).send(post);
    } else return res.status(400).send();
  }
  return res.status(404).send();
});

module.exports = router;
