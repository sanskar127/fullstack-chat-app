import mongoose from "mongoose"

const connectionDB = async () => {
    const url = process.env.MONGODB_URI + "/chatapp"
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting to the database", error);
    }
    // await mongoose.connect(process.env.MONGODB_URI + "/chatapp")
    // .then(() => console.log("Connected to DB Successfully ", process.env.MONGODB_URI, " on port:", process.env.PORT ))
    // .catch(err => console.error('MongoDB connection error:', err))
}

export default connectionDB