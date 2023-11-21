import prisma from "../DB/db.config.js";

// Fetch All Users


// Search User
export const searchUser = async (req, res) => {
    const userId = req.params.user_id;

    const user = await prisma.user.findUnique({
        where: {
            user_id: Number(userId)
        },
        select: {
            password: true,

        }
    })

    return res.json({status:200 , data: user})
};

// Create User


// Update User email
export const updateEmail = async (req, res) => {
    const userId = req.params.user_id;
    const {email} = req.body

    const existingUserByEmail = await prisma.user.findFirst({
        where: {
            email: email,
        },
    });

    if (existingUserByEmail) {
        return res.json({ status: 400, message: "Email already exists" });
    }

    await prisma.user.update({
        where: {
            user_id: Number(userId)
        },

        data: {
            email: email,

        }
    })
    return res.json({status:200 , message: "email updated successfully"})
};


export const updatePassword = async (req, res) => {
    const userId = req.params.user_id;
    const {password} = req.body



    await prisma.user.update({
        where: {
            user_id: Number(userId)
        },

        data: {
            password: password,
        }
    })

    return res.json({status:200 , message: "password updated successfully"})
};