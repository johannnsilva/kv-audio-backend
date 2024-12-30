import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

let app = express();

app.use(bodyParser.json());

let mongoUrl = "mongodb+srv://admin:2002johannn08@cluster0.s1e7c.mongodb.net/prods?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl)

let connection = mongoose.connection

connection.once("open",()=>{
    console.log("MongoDB connection established successfully")
})


app.get("/", 
    (req, res) => {
        console.log("That is a request")
        res.json(
            {
                "message" : "Good mornins "+req.body.name   
            }
        )
    }
);

app.post("/",
    (req,res)=>{
        
        let studentSchema = mongoose.Schema({
            name : String,
            age : Number,
            height : Number
        })

        let Student = mongoose.model("students",studentSchema)

        let newStudent = req.body

        let student = new Student(newStudent)

        student.save().then(
            ()=>{
                res.json(
                    {
                        "message" : "Student saved successfully"
                    }
                )
            }
        ).catch(
            ()=>{
                res.json(
                    {
                        "message" : "Student could not be saved"
                    }
                )
            }
        )
    }
)

app.delete("/",
    (req,res)=>{
        console.log("That is a delete request")
    }
)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});