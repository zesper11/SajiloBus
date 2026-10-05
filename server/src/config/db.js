import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config();

export const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database connected')
        console.log(mongoose.connection.name);
    } catch (error) {
        console.log('error occured while connecting to database ', error)
    }
    
}