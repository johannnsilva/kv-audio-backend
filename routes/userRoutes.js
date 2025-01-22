import express from "express";
import { registerUser } from "../controllers/usercontroller.js";

const userRouter = express.Router();

userRouter.post("/",registerUser)

export default userRouter;