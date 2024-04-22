import express from "express";
import dotenv from "dotenv";

const PORT = 5000;
const app = express();
dotenv.config();

app.use(cookieParser());

app.use(express.json());
app.listen(PORT, ()=> console.log(`server running at port ${PORT}`))