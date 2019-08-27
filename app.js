//module
const express = require("express");
const http = require("http");
const expressErrorHandler = require("express-error-handler");
const static = require("serve-static");
const fs = require("fs");
const path = require("path");

// //변수
const app = express();
const router = express.Router();

//설정
app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname + "/front"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use("/", static(path.join(__dirname, "views/page")));

app.get("/", (req, res) => {
  console.log("get(/) 실행됨.");

  try {
    res.render("page/main");
  } catch (err) {
    console.log(err);
  }
});

app.get("/portfolio", (req, res)=>{
  console.log("get(portfolio) 실행됨.");

  try {
    res.render("page/portfolio");
  } catch (err) {
    console.log(err);
  }
})
app.get("/qna", (req, res)=>{
  console.log("get(qna) 실행됨.");

  try {
    res.render("page/qna");
  } catch (err) {
    console.log(err);
  }
})

//에러 처리
var errorHandler = expressErrorHandler({
  static: {
    "404": "./front/erroor.html"
  }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

//서버 생성
http.createServer(app).listen(app.get("port"), () => {
  console.log("익스프레스로 웹 서버를 실행함: " + app.get("port"));
});
