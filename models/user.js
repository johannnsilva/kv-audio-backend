import mongoose from "mongoose";

const userSchema = new mongoose.scheema({

    email : {
        type : String,
        required : true,
        unique : true
    },
})