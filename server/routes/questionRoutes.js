import {Router} from "express";
import {getAllQuestion,searchQuestion,createQuestion,updateQuestion,deleteQuestion} from "../Controller/QuestionController.js";

const router = Router();

router.get("/",getAllQuestion);
router.get("/:question_id",searchQuestion);
router.post("/",createQuestion);
router.put("/:question_id",updateQuestion);
router.delete("/:question_id",deleteQuestion);

export default router;