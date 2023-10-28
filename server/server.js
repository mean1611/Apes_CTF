import express from "express";
import cors from 'cors';

const app = express();
const PORT = 8080;

app.get("/", (req , res) => {
    return res.send("HELLO WORLD");
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