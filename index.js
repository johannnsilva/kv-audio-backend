import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import reviewRouter from "./routes/reviewRouter.js";
import inquiryRouter from "./routes/inquiryRouter.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use((req, res, next) => {
  let token = req.header("Authorization");
  //created the auth 

  if (token != null) {
    token = token.replace("Bearer ", ""); 
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

      if(!err){
        req.user = decoded;
      }
    });
  }
  next()
});

let mongoUrl = "mongodb+srv://admin:2002johannn08@cluster0.s1e7c.mongodb.net/prods?retryWrites=true&w=majority&appName=Cluster0"
 

mongoose.connect(mongoUrl);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});



app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/inquiries", inquiryRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//malith5@gmail.com 123  - Customer
////malith6@gmail.com 123  - Admin