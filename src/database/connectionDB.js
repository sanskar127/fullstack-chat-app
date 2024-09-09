import mongoose from "mongoose"

const connectionDB = () => {
    const url = process.env.MONGODB_URI + "/chatapp"
    try {
        mongoose.connect(url);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting to the database", error);
    }
    // await mongoose.connect(process.env.MONGODB_URI + "/chatapp")
    // .then(() => console.log("Connected to DB Successfully ", process.env.MONGODB_URI, " on port:", process.env.PORT ))
    // .catch(err => console.error('MongoDB connection error:', err))
}

export default connectionDB