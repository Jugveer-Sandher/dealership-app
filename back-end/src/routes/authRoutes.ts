import express from "express";

import { login, refreshToken, register, logout } from "../controllers/authController";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/refresh", refreshToken);

router.post("/logout", logout);

export default router;
