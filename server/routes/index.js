import {Router} from 'express';
import UserRoutes from './userRoutes.js';
import ReportRoutes from './reportRoutes.js';      

const router = Router();

router.use("/api/user",UserRoutes);
router.use("/api/report",ReportRoutes);

export default router;