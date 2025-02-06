import mongoose from "mongoose"

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI + "/chatapp")
        // console.log("Connected to DB Successfully")
    } catch (error) {
        // console.log(error.message)
    }
}

export default connectionDB