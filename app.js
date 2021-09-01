//module
const express = require("express");
const http = require("http");
const expressErrorHandler = require("express-error-handler");
const static = require("serve-static");
const fs = require("fs");
const path = require("path");
const logger = require("morgan");

// //변수
const app = express();
const router = express.Router();
require("dotenv").config();
const winter_2021_data = require("./views/contents/portfolio/2021_winter_data.json");
const summer_2021_data = require("./views/contents/portfolio/2021_summer_data.json");

//설정
app.set("port", process.env.PORT || 8080);
app.use(express.static(__dirname + "/front"));
app.use(logger());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use("/", static(path.join(__dirname, "views/page")));

app.get("/", (req, res) => {
  res.redirect("/about_econo");
});

app.get("/recruit-2021-1", (req, res) => {
  res.render("page/recruit/recruit_2021");
});

app.get("/about_econo", (req, res) => {
  res.render("page/about");
});

app.get("/hackathon-2019", (req, res) => {
  res.render("page/hackathon/hackathon_2019");
});

app.get("/hackathon-2020", (req, res) => {
  res.render("page/hackathon/hackathon_2020", { test: process.env.AKECONO });
});

app.get("/hackathon-2021", (req, res) => {
  res.render("page/hackathon/hackathon_2021", { test: process.env.AKECONO });
});

app.get("/summer-dev-2020", (req, res) => {
  res.render("page/dev/summer_dev_2020");
});

app.get("/winter-dev-2021", (req, res) => {
  res.render("page/dev/winter_dev_2021");
});

app.get("/summer-dev-2021", (req, res) => {
  res.render("page/dev/summer_dev_2021");
});

app.get("/portfolio-2021-summer", (req, res) => {
  res.render("page/portfolio/portfolio_2021_summer", {
    data: summer_2021_data,
  });
});

app.get("/portfolio-2021-winter", (req, res) => {
  res.render("page/portfolio/portfolio_2021_winter", {
    data: winter_2021_data,
  });
});

app.get("/portfolio-2020-summer", (req, res) => {
  res.render("page/portfolio/portfolio_2020_summer");
});

app.get("/portfolio-2020-winter", (req, res) => {
  res.render("page/portfolio/portfolio_2020_winter");
});

app.get("/faq", (req, res) => {
  res.render("page/faq");
});

//에러 처리
var errorHandler = expressErrorHandler({
  static: {
    404: "./front/erroor.html",
  },
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

//서버 생성
http.createServer(app).listen(app.get("port"), () => {
  console.log("익스프레스로 웹 서버를 실행함: " + app.get("port"));
});
