import prisma from "../DB/db.config.js";

// Fetch All Reports
export const getAllReports = async (req, res) => {
    const reports = await prisma.reports.findMany()

    return res.json({status:200 , data: reports})
};

// Search Report
export const searchReport = async (req, res) => {
    const reportId = req.params.report_id;

    const report = await prisma.reports.findUnique({
        where: {
            report_id: Number(reportId)
        }
    })

    return res.json({status:200 , data: report})
};

// Create Report
export const createReport = async (req, res) => {
    const {report_title , report_desc} = req.body
    
    const newReport = await prisma.reports.create({
        data: {
            report_title: report_title,
            report_desc: report_desc
        }
    })  

    return res.json({status:200 , data: newReport , message: "Report created successfully"})
};

// Delete Report
export const deleteReport = async (req, res) => {
    const reportId = req.params.report_id;

    await prisma.reports.delete({
        where: {
            report_id: Number(reportId)
        }
    })

    return res.json({status:200 , message: "Report deleted successfully"})
}