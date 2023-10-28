import express from "express";
import cors from 'cors';

const app = express();
const PORT = 8080;

app.get("/", (req , res) => {
    return res.send("HELLO WORLD");
<<<<<<< Updated upstream
=======
=======

const cors = require("cors");
const PORT = 8080;

// const Prisma = require('@prisma/client');
// const prisma = new Prisma.PrismaClient();
// const creat = async() => {
//     const newUser = await prisma.user.
// }


app.use(cors());

app.get("/api/home", (req , res) => {
    res.json({message: "HELLO WORLD"});
>>>>>>> Stashed changes
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Add cors
app.use(cors());

// Routes Files
import routes from "./routes/index.js";
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});