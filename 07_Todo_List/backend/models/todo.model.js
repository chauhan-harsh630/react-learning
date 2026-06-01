import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false,
    },
    isDelete: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;    