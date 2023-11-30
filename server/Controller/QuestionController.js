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
    const { question_title, question_desc, answer, hint, score, question_category_id } = req.body;
    
    // Convert the "score" from a string to an integer
    const scoreInt = parseInt(score, 10);

    // Check if "score" is a valid integer
    if (isNaN(scoreInt)) {
        return res.status(400).json({ status: 400, message: "Invalid score. Please provide a valid integer for the score." });
    }

    // Use the "scoreInt" variable instead of "score"
    const newQuestion = await prisma.question.create({
        data: {
            question_title: question_title,
            question_desc: question_desc,
            answer: answer,
            hint: hint,
            score: scoreInt, // Use the integer value
            question_category_id: question_category_id
        }
    });

    return res.json({ status: 201, data: newQuestion, message: "Question created successfully" });
};

// Update Question
export const updateQuestion = async (req, res) => {
    const questionId = req.params.question_id;
    const { question_title, question_desc, answer, hint, score, question_category_id } = req.body;

    // Define a set of valid Category IDs
    const validCategoryIDs = [1, 2, 3, 4, 5];

    // Ensure that the provided Category ID is one of the valid options
    if (!validCategoryIDs.includes(Number(question_category_id))) {
        return res.status(400).json({ status: 400, message: "Invalid Category ID. Please choose a valid Category ID." });
    }

    // Convert the Category ID to an integer before updating
    const updatedCategoryID = parseInt(question_category_id, 10);

    await prisma.question.update({
        where: {
            question_id: Number(questionId)
        },

        data: {
            question_title: question_title,
            question_desc: question_desc,
            answer: answer,
            hint: hint,
            score: Number(score),
            question_category_id: updatedCategoryID
        }
    });

    return res.json({ status: 200, message: "Question updated successfully" });
};

// Delete Question
export const deleteQuestion = async (req, res) => {
    const questionId = req.params.question_id;

    await prisma.question.delete({
        where: {
            question_id: Number(questionId)
        }
    });

    return res.json({ status: 200, message: "Question deleted successfully" });
};