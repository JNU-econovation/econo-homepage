//module
const express = require("express");
const http = require("http");
const expressErrorHandler = require("express-error-handler");
const fs = require("fs");

// //변수
const app = express();
const router = express.Router();

//설정
app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname+ '/front'))

app.get('/', (req, res)=>{
  console.log('get(/) 실행됨.');
  
  fs.readFile('./front/index.html', (err, data)=>{
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.end(data);
  });
});

//에러 처리
var errorHandler = expressErrorHandler({
  static: {
    "404": "public/index.html"
  }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

//서버 생성
http.createServer(app).listen(app.get("port"), () => {
  console.log("익스프레스로 웹 서버를 실행함: " + app.get("port"));
});
