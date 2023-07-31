const express = require("express");
require("dotenv").config();
const app = express();
const routers = require("./src/api/routers/index");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const { validationLogin } = require("./middlewares");
const models = require("./src/models"); // index.js 파일 임포트

const allowedOrigins = `http://${process.env.FRONTEND_ADDRESS}`; // 모든 출처 허용, 추후 허용할 사이트만 따로 설정 필요

const corsOptions = {
  origin: allowedOrigins,
  credentials: true, // 쿠키 허용
  exposedHeaders: ["Authorization"], // 헤더 허용
};
app.use(cors(corsOptions));
app.use(cookieParser()); // 쿠키 파싱
app.use(express.json()); // json 파싱
// app.use(express.urlencoded({ extended: true })); // 폼데이터 파싱 //이 미들웨어는 URL 인코딩된 요청 본문을 파싱합니다. extended: true는 복잡한 객체를 URL 인코딩할 수 있게 합니다.

// app.use(validationLogin);

// api
app.use("/api", routers);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("------------------------------");
  console.log("🚀 START SERVER!!");
  console.log("🎧 I'm listening on port " + port);
  console.log("------------------------------");
});
