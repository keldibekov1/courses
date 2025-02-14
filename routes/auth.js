import express from "express";
import { register, login, activate } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/activate/:token", activate);  
export default router;
