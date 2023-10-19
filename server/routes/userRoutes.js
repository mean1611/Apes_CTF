import {Router} from "express";
import {createUser,updateUser,getAllUsers,searchUser,deleteUser} from "../Controller/UserController.js";

const router = Router();

router.get("/", getAllUsers);
router.get("/:user_id", searchUser);
router.post("/", createUser);
router.put("/:user_id", updateUser);
router.delete("/:user_id", deleteUser);

export default router;