import prisma from "../DB/db.config.js";

// Search User
export const searchUser = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await prisma.user.findFirst({
        where: {
            username: username,
            password: password,
        },
    });

    if (user) {
        return res.status(200).json({ status: 200, message: "เข้าสู่ระบบสำเร็จ" });
    }

    return res.status(401).json({ status: 401, message: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" });
};
