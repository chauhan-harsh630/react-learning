import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import todoRoute from "./route/todoroute.js";
import cors from 'cors';


const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use('/api/todos', todoRoute);

try {
    mongoose.connect('mongodb://127.0.0.1:27017/todoapp');
        console.log('MongoDB connected successfully!');
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})