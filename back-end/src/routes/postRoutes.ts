import { isAuthenticated } from "../middleware/auth";

const express = require("express");
const { CreatePost, GetAllPosts, GetPost, UpdatePost, DeletePost } = require("../controllers/postController.ts");

const router = express.Router();

router.post("/", CreatePost);
router.get("/", GetAllPosts);
router.get("/:id", GetPost);
router.put("/:id", UpdatePost);
router.delete("/:id", DeletePost);

export default router;
