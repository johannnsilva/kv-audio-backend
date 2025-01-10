import mongoose from "mongoose";

const userSchema = new mongoose.scheema({

    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,  
    },
    role : {
        type : String,
        required : true,
        default : "customer"
    },
    FistName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    phoneNumber : {
        type : String,
        required : true,
    }

})