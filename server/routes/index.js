import {Router} from 'express';
import UserRoutes from './userRoutes.js';
import ReportRoutes from './reportRoutes.js';      
import QuestionRoutes from './questionRoutes.js';
import LoginRoutes from './loginRoutes.js'
import UserscoreRoutes from './userscoreRoutes.js'

const router = Router();

router.use("/api/user",UserRoutes);
router.use("/api/report",ReportRoutes);
router.use("/api/question",QuestionRoutes);
router.use("/api/login",LoginRoutes);
router.use("/api/solve",UserscoreRoutes);

export default router;