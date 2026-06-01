import { createTodo, getAllTodos, updateTodo, deleteTodo } from "../controller/todo.controller.js";
import express from "express";

const router = express.Router();
router.post('/', createTodo);
router.get('/', getAllTodos);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;