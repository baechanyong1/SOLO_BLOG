const express = require("express");
const app = express();
const port = 3000;
// const commentsRouter = require("./routes/comments");
const postRouter = require("./routes/post");
const connect = require("./schemas");

connect();
app.use(express.json());
app.use("/api", [postRouter]);

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("기본 URI에 POST메소드 정상 실행 중");
});

app.get("/", (req, res) => {
  console.log(req.query);

  res.json();
});

app.get("/:id", (req, res) => {
  console.log(req.params);
});

app.listen(port, () => {
  console.log(port, "번 포트로 서버가 열렸어요");
});
