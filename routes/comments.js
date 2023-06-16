// const express = require("express");
// const router = express.Router();

// const Comments = require("../Schema/comments");
// const Posts = require("../schemas/post");

// router.get("/comment", async (req, res) => {
//   const comments = await Post.find({});
//   const cmtIds = comments.map((comment) => cart.cmtId);
//   //이 밑 줄 부터 다시 작성
//   const posts = await Posts.find({ postId: postId });

//   const results = carts.map((cart) => {
//     return {
//       quantity: comments.quantity,
//       posts: posts.find((item) => item.postId === comments.postId),
//     };
//   });

//   res.json({
//     carts: results,
//   });
// });
