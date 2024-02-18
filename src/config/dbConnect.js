import mongoose from "mongoose"
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri);

let db = mongoose.connection;

export default db;