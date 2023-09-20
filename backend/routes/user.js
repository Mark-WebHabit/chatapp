import express from "express";

// cotrollers
import { getSingleUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/", getSingleUser);

export default router;
