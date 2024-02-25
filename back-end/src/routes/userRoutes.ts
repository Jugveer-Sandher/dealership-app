import express from "express";

import { GetUserById, GetUserByEmail, UpdateUser } from "../controllers/userController";
import { isAuthenticated } from "../middleware/auth";

const router = express.Router();

// regex for UUID
const idRegex =
  "[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}";
const emailRegex = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}";

router.get(`/:id(${idRegex})`, GetUserById);
router.put(`/:id(${idRegex})`, isAuthenticated, UpdateUser);
router.get(`/:email(${emailRegex})`, GetUserByEmail);

export default router;
