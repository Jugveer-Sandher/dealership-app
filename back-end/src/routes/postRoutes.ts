import { isAuthenticated } from "../middleware/auth";

const express = require("express");
const { CreatePost, GetCars, GetCar, UpdateCar, DeleteCar } = require("../controllers/postController.ts");

const router = express.Router();

router.post("/", isAuthenticated, CreatePost);
// router.get("/", GetCars);
// router.get("/:id", GetCar);
// router.put("/:id", UpdateCar);
// router.delete("/:id", DeleteCar);

export default router;
