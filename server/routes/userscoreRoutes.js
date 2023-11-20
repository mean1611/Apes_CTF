import { Router } from "express";
import { createUserScore } from "../Controller/UserScoreController.js";



const router = Router();

router.post("/", createUserScore);



export default router;