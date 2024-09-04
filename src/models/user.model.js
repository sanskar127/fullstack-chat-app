import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },

    uname: {
        type: String,
        required: true,
        unique: true
    },

    passwd: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profilePicture:{
        type: String,
        default: ""
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

export default User