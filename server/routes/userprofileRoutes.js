import {Router} from "express";
import { searchUser, updateEmail, updatePassword } from "../Controller/UserProfileController.js";

const router = Router();

router.get("/:user_id", searchUser);
router.put("/email/:user_id", updateEmail);
router.put("/password/:user_id", updatePassword);

export default router;