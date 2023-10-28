import {Router} from 'express';
import UserRoutes from './userRoutes.js';
import ReportRoutes from './reportRoutes.js';      
import QuestionRoutes from './questionRoutes.js';

const router = Router();

router.use("/api/user",UserRoutes);
router.use("/api/report",ReportRoutes);
router.use("/api/question",QuestionRoutes);

export default router;