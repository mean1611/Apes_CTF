import prisma from "../DB/db.config.js";

// Fetch All Questions
export const getAllQuestion = async (req, res) => {
    const questions = await prisma.question.findMany()

    return res.json({status:200 , data: questions})
};

// Search Question
export const searchQuestion = async (req, res) => {
    const questionId = req.params.question_id;

    const question = await prisma.question.findUnique({
        where: {
            question_id: Number(questionId)
        }
    })

    return res.json({status:200 , data: question})
};

// Create Question
export const createQuestion = async (req, res) => {
    const {question_title,question_desc,answer,hint,score,question_category_id} = req.body
    
    const newQuestion = await prisma.question.create({
        data: {
            question_title: question_title,
            question_desc: question_desc,
            answer: answer,
            hint: hint,
            score: score,
            question_category_id: question_category_id
        }
    })

    return res.json({status:200 , data: newQuestion , message: "Question created successfully"})
};

// Update Question  
export const updateQuestion = async (req, res) => {
    const questionId = req.params.question_id;
    const {question_title,question_desc,answer,hint,score,question_category_id} = req.body

    await prisma.question.update({
        where: {
            question_id: Number(questionId)
        },

        data: {
            question_title: question_title,
            question_desc: question_desc,
            answer: answer,
            hint: hint,
            score: score,
            question_category_id: question_category_id
        }
    })

    return res.json({status:200 , message: "Question updated successfully"})
};

// Delete Question
export const deleteQuestion = async (req, res) => {
    const questionId = req.params.question_id;

    await prisma.question.delete({
        where: {
            question_id: Number(questionId)
        }
    })

    return res.json({status:200 , message: "Question deleted successfully"})
};