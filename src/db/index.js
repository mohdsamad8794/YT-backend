
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { DB_NAME } from '../constents.js';

dotenv.config();

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\nMongoDB is connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('Database connection error', error);
        process.exit(1);
    }
};

export default connectDB;
