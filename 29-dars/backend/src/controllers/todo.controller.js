import {
    addTodo,
    deleteTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
} from "../services/todo.service.js";

export async function getAllTodosController(req, res, next) {
    try {
        const todos = await getAllTodos();
        if (todos == "Todo not found") {
            return res.status(404).send({
                statusCode: 404,
                message: "Todo not found",
            });
        }
        res.status(200).send({ message: "All todos", data: todos });
    } catch (error) {
        next();
        res.status(500).send({ statusCode: 500, message: error.message });
    }
}
export async function getOneTodoController(req, res, next) {
    try {
        const { id } = req.params;
        const todo = await getTodoById(id);
        if (todo == "Todo not found with this id")
            return res
                .status(404)
                .send({ statusCode: 404, message: "Todo not found" });
        res.status(200).send({ message: "One Todo", data: todo });
    } catch (error) {
        next();
        res.status(500).send({ statusCode: 500, message: error.message });
    }
}
export async function addTodoController(req, res, next) {
    try {
        const newTodo = await addTodo(req.body);
        res.status(201).send({
            message: "Todo created successfully",
            data: newTodo,
        });
    } catch (error) {
        next();
        res.status(500).send({ statusCode: 500, message: error.message });
    }
}
export async function updateTodoController(req, res, next) {
    try {
        const { id } = req.params;
        const updatedTodo = await updateTodo(id, req.body);
        if (updatedTodo == "Todo not found")
            return res
                .status(404)
                .send({ statusCode: 404, message: "Todo not found" });
        res.status(200).send({
            message: "Todo updated successfully",
            data: updatedTodo,
        });
    } catch (error) {
        next();
        res.status(500).send({ statusCode: 500, message: error.message });
    }
}
export async function deleteTodoController(req, res, next) {
    try {
        const { id } = req.params;
        const deletedTodo = await deleteTodo(id);
        if (
            deletedTodo == "Todo not found with this id or maybe deleted before"
        )
            return res.status(404).send({
                statusCode: 404,
                message: "Todo not found or already deleted",
            });
        res.status(200).send({
            statusCode: 200,
            message: "Todo deleted successfully",
        });
    } catch (error) {
        next();
        res.status(500).send({ statusCode: 500, message: error.message });
    }
}
