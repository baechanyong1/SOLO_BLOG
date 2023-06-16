const express = require("express");
const router = express.Router();

//게시판 목록 조회 API
router.get("/posts", (req, res) => {
  res.status(200).json({ posts: posts });
});

// 게시판 상세 조회 API
router.get("/posts/:postsId", (req, res) => {
  const { postsId } = req.params;
  const [detail] = posts.filter((posts) => posts.PostsId === String(postsId));
  res.json({ detail });
});

// 게시판 작성
const Posts = require("../schemas/post.js");
router.post("/posts", async (req, res) => {
  const { postsId, nickname, title, bodyText } = req.body;
  // const date = date();

  const existsPosts = await Posts.find({ postsId: Number(postsId) });
  if (existsPosts.length) {
    return res.status(400).json({
      success: false,
      errorMessage: "이미 존재하는 게시물입니다.",
    });
  }
  const createdPosts = await Posts.create({
    postsId: Number(postsId),
    nickname: String(nickname),
    title: String(title),
    bodyText: String(bodyText),
    // date: date(),
  });

  res.json({ Posts: createdPosts });
});

// 게시글 수정
router.put("/posts", async (req, res) => {
  const { postsId } = req.params;
  const { quantity } = req.body;

  const existsPosts = await Post.find({ postsId });
  if (existsPosts.length) {
    await Cart.updateOne(
      { postsId: postsId },
      { $set: { quantity: quantity } }
    );
  }
  res.status(200).json({ success: true });
});

// 게시글 삭제
router.delete("/posts/:postsId", async (req, res) => {
  const { postsId } = req.params;

  const existsPosts = await Cart.find({ postsId });
  if (existsPosts.length) {
    await Post.deleteOne({ postsId });
  }
  res.json({ result: "success" });
});

module.exports = router;
