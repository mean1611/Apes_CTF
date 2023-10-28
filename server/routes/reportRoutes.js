import { Router } from "express";
import { createReport, getAllReports, searchReport, deleteReport } from "../Controller/ReportController.js";

const router = Router();

router.get("/", getAllReports);
router.get("/:report_id", searchReport);
router.post("/", createReport);
router.delete("/:report_id", deleteReport);

export default router;