import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    fullName:{
    type: String,
    required: true,
    },
    email:{
    type: String,
    required: true,
    },
    phone:{
    type: String,
    required: true,
    },
    subject:{
    type: String,
    required: true,
    },
    fullName:{
    type: String,
    required: true,
    },

})