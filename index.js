import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import studentRouter from "./routes/studentRoutes.js";

const app = express();

app.use(bodyParser.json());

let mongoUrl = "mongodb+srv://admin:2002johannn08@cluster0.s1e7c.mongodb.net/prods?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl)

let connection = mongoose.connection

connection.once("open",()=>{
    console.log("MongoDB connection established successfully")
})

app.use("/students",studentRouter)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});