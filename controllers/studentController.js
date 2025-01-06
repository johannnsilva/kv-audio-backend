import Student from "../models/student.js"

export function getStudents(req,res){
    Student.find().them(
        (result)=>{
            res.jason(result)
        }
    )
}

export function postStudents(req,res){
 
    let studentData = req.body

    let student = new Student (studentData)

    student.save().them(()=>{
        res.json({
            message:"Student saved successfully"
        } )
    } ).catch(()=>{
        message : "Student saving failed"
    }

    )
}