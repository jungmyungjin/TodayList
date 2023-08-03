const express = require("express");
require("dotenv").config();
const app = express();
const routers = require("./src/api/routers/index");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const allowedOrigins = [
  `${process.env.FRONTEND_ADDRESS}`,
  "http://localhost:3000",
]; // 모든 출처 허용, 추후 허용할 사이트만 따로 설정 필요

const corsOptions = {
  origin: allowedOrigins,
  credentials: true, // 쿠키 허용
  exposedHeaders: ["Authorization"], // 헤더 허용
};

app.use(cors(corsOptions));
app.use(cookieParser()); // 쿠키 파싱
app.use(express.json()); // json 파싱

// api
app.use("/api", routers);

const port = process.env.TODAY_LIST_PORT || 3000;
app.listen(port, () => {
  console.log("------------------------------");
  console.log("🚀 START SERVER!!");
  console.log("🎧 I'm listening on port " + port);
  console.log("------------------------------");
});
