import prisma from "../DB/db.config.js";

// Search User
export const searchUser = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const user = await prisma.user.findFirst({
        where: {
            username: username,
            password: password,
            email: email,
        },
    });

    if (user) {    //ส่งข้อมูลของ user กลับไปเข้า redux store
        return res.status(200).json({ 
            status: 200, 
            message: "เข้าสู่ระบบสำเร็จ",
            data: {
                username: user.username,
                email: user.email,
                user_role_id: user.user_role_id,
                user_id: user.user_id,  
            }, });
    }

    return res.status(401).json({ status: 401, message: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" });
};
