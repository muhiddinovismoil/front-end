import { Router } from "express";
import {
    addTodoController,
    deleteTodoController,
    getAllTodosController,
    getOneTodoController,
    updateTodoController,
} from "../controllers/todo.controller.js";

export const todoRouter = Router();

todoRouter.get("/todos", getAllTodosController);
todoRouter.get("/todo/:id", getOneTodoController);
todoRouter.post("/todo", addTodoController);
todoRouter.put("/todo/:id", updateTodoController);
todoRouter.delete("/todo/:id", deleteTodoController);
