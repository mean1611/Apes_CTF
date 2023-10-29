import prisma from "../DB/db.config.js";

// Fetch All Users
export const getAllUsers = async (req, res) => {
    const users = await prisma.user.findMany()

    return res.json({status:200 , data: users})
};

// Search User
export const searchUser = async (req, res) => {
    const userId = req.params.user_id;

    const user = await prisma.user.findUnique({
        where: {
            user_id: Number(userId)
        }
    })

    return res.json({status:200 , data: user})
};

// Create User
// Create User
export const createUser = async (req, res) => {
    const { username, password, email, user_role_id } = req.body;

    const existingUserByUsername = await prisma.user.findFirst({
        where: {
            username: username,
        },
    });

    const existingUserByEmail = await prisma.user.findFirst({
        where: {
            email: email,
        },
    });

    if (existingUserByUsername && existingUserByEmail) {
        return res.json({ status: 400, message: "Username and Email already exist" });
    } else if (existingUserByUsername) {
        return res.json({ status: 400, message: "Username already exists" });
    } else if (existingUserByEmail) {
        return res.json({ status: 400, message: "Email already exists" });
    }

    const newUser = await prisma.user.create({
        data: {
            username: username,
            password: password,
            email: email,
            user_role_id: user_role_id,
        },
    });

    return res.json({ status: 200, data: newUser, message: "User created successfully" });
};

// Update User
export const updateUser = async (req, res) => {
    const userId = req.params.user_id;
    const {username, password,email,user_role_id} = req.body

    await prisma.user.update({
        where: {
            user_id: Number(userId)
        },

        data: {
            username: username,
            password: password,
            email: email,
            user_role_id: user_role_id
        }
    })

    return res.json({status:200 , message: "User updated successfully"})
};

// Delete User
export const deleteUser = async (req, res) => {
    const userId = req.params.user_id;

    await prisma.user.delete({
        where: {
            user_id: Number(userId)
        }
    });

    return res.json({status:200 , message: "User deleted successfully"})
};
