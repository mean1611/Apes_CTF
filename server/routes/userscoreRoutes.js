import { Router } from "express";
import { createUserScore,UserScore } from "../Controller/UserScoreController.js";



const router = Router();

router.post("/", createUserScore);
router.get("/userscore/", UserScore);



export default router;