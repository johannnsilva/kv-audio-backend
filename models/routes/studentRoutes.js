import express from "express"
import { getStudents, postStudent } from "../../controllers/studentController.js"
let studentRouter = express.Router()

studentRouter.get("/", getStudents);

studentRouter.post("/",postStudent);

export default studentRouter;