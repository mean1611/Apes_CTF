import { Router } from "express";
import { createUserScore,getUserScore } from "../Controller/UserScoreController.js";



const router = Router();

router.post("/", createUserScore);



export default router;