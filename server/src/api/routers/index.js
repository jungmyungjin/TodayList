const express = require("express");
const router = express.Router();

const healthCheck = require("./healthCheck");
const taskRouter = require("./taskRouter");
const userRouter = require("./userRouter");

router.use("/task", taskRouter);
router.use("/auth", userRouter);
router.use("/healthCheck", healthCheck);

module.exports = router;
