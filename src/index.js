import dotenv from 'dotenv'
import mongoose from 'mongoose';
import connectDB from './db/index.js';
import { DB_NAME } from './constents.js';
import { app } from './aap.js';


dotenv.config({
    path: './env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
})
.catch((error)=>{
    console.log(`Database connection is failed!! ${error}`);
})