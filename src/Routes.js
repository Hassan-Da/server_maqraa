const express = require("express");
const Routes = express();

// regester && login Routes
const regesterRoutes = require("../router/regester.Router");
Routes.use("/", regesterRoutes);

//user Router
const userRouter = require("../router/user.Router");
Routes.use("/users", userRouter);

//lessons Router
const lessonsRouter = require("../router/lessons.Router");
Routes.use("/lessons", lessonsRouter);

//student Router
const studentRouter = require("../router/student.Router");
Routes.use("/users/students", studentRouter);

//Lists Router
const listsRouter = require("../router/lists.Router");
Routes.use("/lists", listsRouter);

// Exame Router
const exameRouter = require("../router/exame.Router");
Routes.use("/exame", exameRouter);

module.exports = Routes;
