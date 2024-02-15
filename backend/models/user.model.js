import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },

    lName: {
        type: String
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    uName: {
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
})

const User = mongoose.model("User", userSchema)

export default User