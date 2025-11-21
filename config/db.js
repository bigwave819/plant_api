import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to the db");        
    } catch (error) {
        console.error("error connecting to the DB", error);        
    }
}

export default connectDB;