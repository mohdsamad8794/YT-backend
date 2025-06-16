import dotenv from 'dotenv'
import mongoose from 'mongoose';
import connectDB from './db/index.js';
import { DB_NAME } from './constents.js';

dotenv.config({
    path: './env'
})
connectDB();