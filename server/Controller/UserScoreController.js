import prisma from "../DB/db.config.js";

// API endpoint สำหรับสร้างข้อมูลใหม่ใน User_score
export const createUserScore = async (req, res) => {
  try {
    const { user_id, completequestion_id, score, username } = req.body;

    // ตรวจสอบว่ามี user_id นี้ในฐานข้อมูลหรือไม่
    const existingUser = await prisma.user_score.findFirst({
      where: {
        user_id: user_id,
      },
    });

if (existingUser) {
  const updatedUserScore = await prisma.user_score.update({
    where: {
      user_score_id: existingUser.user_score_id,
    },
    data: {
      score: {
        increment: score, // increment the existing score by the new score
      },
    },
  });
        return res.status(200).json(updatedUserScore);
    } else {
        const newUserScore = await prisma.user_score.create({
            data: {
                user_id,
                completequestion_id,
                score,
                username,
            },
        });
        return res.status(201).json(newUserScore);
    }
  } catch (error) {
    return res.status(500).json({ message: "Error creating user score", error: error.message });
  }
};
