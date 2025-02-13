import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";
import dotenv from "dotenv"


dotenv.config();


const app = express();

app.use(bodyParser.json());

let mongoUrl = "mongodb+srv://admin:2002johannn08@cluster0.s1e7c.mongodb.net/prods?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(mongoUrl)

const connection = mongoose.connection


connection.once("open",()=>{
    console.log("MongoDB connection established successfully")
})

app.use("/api/users",userRouter)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});