import mongoose from "mongoose"

const connectionDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI + "/chatapp")
    .then(() => console.log("Connected to DB Successfully ", process.env.MONGODB_URI, " on port:", process.env.PORT ))
    .catch(err => console.error('MongoDB connection error:', err))
}

export default connectionDB