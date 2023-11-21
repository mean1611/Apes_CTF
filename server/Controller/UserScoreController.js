import prisma from "../DB/db.config.js";

// API endpoint สำหรับสร้างข้อมูลใหม่ใน User_score
export const createUserScore = async (req, res) => {
  try {
    const { user_id, score, username } = req.body;
    let completequestion_id = req.body.completequestion_id;

    // ตรวจสอบว่า completequestion_id เป็น array หรือไม่
    if (!Array.isArray(completequestion_id)) {
      // ถ้าไม่ใช่ array, แปลงให้เป็น array
      completequestion_id = [completequestion_id];
    }

    // ตรวจสอบว่ามี user_id นี้ในฐานข้อมูลหรือไม่
    const existingUser = await prisma.user_score.findFirst({
      where: {
        user_id: user_id,
      },
    });

    if (existingUser) {
      // ตรวจสอบว่า completequestion_id นี้มีอยู่ใน list ของ completequestion_id ของ user นี้หรือไม่
      if (!existingUser.completequestion_id.includes(completequestion_id[0])) {
        // ถ้ายังไม่มี, เพิ่ม completequestion_id นี้เข้าไปใน list และเพิ่ม score
        existingUser.completequestion_id.push(completequestion_id[0]);
    
        const updatedUserScore = await prisma.user_score.update({
          where: {
            user_score_id: existingUser.user_score_id,
          },
          data: {
            score: {
              increment: score, // increment the existing score by the new score
            },
            completequestion_id: existingUser.completequestion_id, // update the completequestion_id list
          },
        });
        return res.status(200).json(updatedUserScore);
      } else {
        // ถ้ามี completequestion_id นี้อยู่แล้ว, ไม่ทำอะไร
        console.log("โจทย์ซ้ำไอน้อง");
        return res.status(200).json(existingUser);
      }
    } else {
      const newUserScore = await prisma.user_score.create({
        data: {
          user_id,
          completequestion_id: completequestion_id, // use completequestion_id as an array
          score,
          username,
        },
      });

      return res.status(200).json(newUserScore);
    }
  } catch (error) {
    return res.status(500).json({ error: "Error creating user score", message: error });
  }
};



