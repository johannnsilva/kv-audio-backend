import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import e from "express";
import User from "../models/user.js"

export function registerUser(req,res){
const data = req.body;

data.password = bcrypt.hashSync(data.password,10)

    const newUser = new User(data)

newUser.save().then(()=>{
    res.json({message : "User registered successfully"})
}).catch((error)=>{
    res.status(500).json({error : "User registration faild"})
})


}


export function loginUser(req,res){
    const data = req.body;

    User.findOne({email : data.email

    }).then(
        (user)=>{
            if(!user==null){
                res.status(401).json({error : "User not found"})

                }else{
                    const ispasswordCorrect = bcrypt.compareSync(data.password,user.password)

                    if(ispasswordCorrect){
                        const token = jwt.sign({
                            fisrtName : user.firstName,
                            lastName : user.lastName,
                            email : user.email,
                            role : user.role
                        },"Kv-secret-89!")

                        res.json({ message : "User logged in successfully",token : token});

                    }else{
                        res.status(401).json({error : "Invalid password"})

                    }   
                }
        }

)
}