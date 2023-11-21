import { Router } from "express";
import { createUserScore,UserScore } from "../Controller/UserScoreController.js";



const router = Router();

router.post("/", createUserScore);
router.get("/userscore/:user_id", UserScore);



export default router;