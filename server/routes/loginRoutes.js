import {Router} from "express";
import {searchUser} from "../Controller/LoginController.js";

const router = Router();

router.post("/",searchUser);



export default router;