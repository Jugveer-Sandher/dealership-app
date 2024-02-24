import express from "express";

import { login, refreshToken, register, logout } from "../controllers/authController";

const router = express.Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Log in a user
 *     description: Endpoint to log in a user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             example:
 *               message: Login successful
 *               token: <jwt-token>
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               message: Invalid request
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               message: Unauthorized access
 */
router.post("/register", register);

router.post("/login", login);

router.post("/refresh", refreshToken);

router.post("/logout", logout);

export default router;
