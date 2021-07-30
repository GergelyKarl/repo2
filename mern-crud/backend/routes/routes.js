import express from "express";
import { createPost, getPosts, updatePost } from "../controllers/posts.js";
import cors from "cors";
const router = express.Router();

router.get("/", cors(), getPosts);
router.post("/", cors(), createPost);
router.patch("/:id", cors(), updatePost);

export default router;
