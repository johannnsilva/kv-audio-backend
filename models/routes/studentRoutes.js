import express from "express"

let studentRouter = express.Router()

studentRouter.get("/",
    (req,res)=>{
        res.json({
             message:"get route in student"
        })
    }
)

studentRouter.post("/",
    (req,res)=>{
         message:"post route in student"
    }
)

export default studentRouter