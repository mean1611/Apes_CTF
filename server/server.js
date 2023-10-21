import express from "express";
const app = express();
const PORT = 8080;

app.get("/", (req , res) => {
    return res.send("HELLO WORLD");
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes Files
import routes from "./routes/index.js";
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
