const express = require("express");
const router = express.Router();

const helloRouter = require("./helloRouter");
const taskRouter = require("./taskRouter");
const userRouter = require("./userRouter");

router.use("/hello", helloRouter);
router.use("/task", taskRouter);
router.use("/", userRouter);

module.exports = router;
