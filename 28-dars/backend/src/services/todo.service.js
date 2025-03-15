import { Todo } from "../schema/todos.schema.js";

export const getAllTodos = async () => {
    try {
        const getAll = await Todo.find();
        if (getAll.length === 0) {
            throw new Error("Todo not found");
        }
        return getAll;
    } catch (error) {
        return error.message;
    }
};

export const getTodoById = async (id) => {
    try {
        const getOne = await Todo.findById(id);
        if (!getOne) {
            throw new Error("Todo not found with this id");
        }
        return getOne;
    } catch (error) {
        return error.message;
    }
};

export const addTodo = async (data) => {
    try {
        const newTodo = new Todo(data);
        await newTodo.save();
        return newTodo;
    } catch (error) {
        return error.message;
    }
};
export const updateTodo = async (id, data) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { ...data },
            { new: true }
        );
        if (!updatedTodo) throw new Error("Todo not found");
        return updatedTodo;
    } catch (error) {
        return error.message;
    }
};

export const deleteTodo = async (id) => {
    try {
        const getOne = await Todo.findByIdAndDelete({ _id: id });
        if (!getOne) {
            throw new Error(
                "Todo not found with this id or maybe deleted before"
            );
        }
        return getOne;
    } catch (error) {
        return error.message;
    }
};
