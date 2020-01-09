//module
const express = require("express");
const http = require("http");
const expressErrorHandler = require("express-error-handler");
const static = require("serve-static");
const fs = require("fs");
const path = require("path");
const logger = require('morgan');

// //변수
const app = express();
const router = express.Router();

//설정
app.set("port", process.env.PORT || 80);
app.use(express.static(__dirname + "/front"));
app.use(logger());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use("/", static(path.join(__dirname, "views/page")));

app.get("/", (req, res) => {
  res.redirect('/winter')
});

app.get("/about", (req, res) => {
  res.render("page/main");
});

app.get("/portfolio", (req, res) => {
  res.render("page/portfolio");
});

app.get("/winter", (req, res) => {
  res.render("page/winter_dev");
});

app.get("/faq", (req, res) => {
  res.render("page/faq");
});

app.get("/invitation", (req, res) => {
  res.render("page/invitation");
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