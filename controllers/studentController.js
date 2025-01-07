import Student from "../models/student.js";

export function getStudents(req,res){
    Student.find().them(
        (result)=>{
            res.json(result)
        }
    )
}

export function postStudents(req,res){

    let studentData = req.body

    let student = new student (studentData)

    student.save().then(()=>{
        res.json({
            message : "Student saved successfully"
        })
    }).catch(()=>{
        message : "student saving failed"
    }
)
}