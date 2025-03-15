"use server";
import { TodoFieldI } from "@/types/form-type";
import { TodoI } from "@/types/todo-type";
import { revalidateTag } from "next/cache";
const url = process.env.API_URL;
export const getAllTodo = async () => {
    const res = await fetch(`${url}/todos`, {
        next: {
            tags: ["todo_list"],
        },
    });
    const data: TodoI[] = await res.json();
    return data;
};
export const createTodo = async (todo: TodoFieldI) => {
    const res = await fetch(`${url}/todo`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });
    revalidateTag("todo_list");
    const data: TodoI = await res.json();
    return data;
};
export const deleteTodo = async (id: string) => {
    const res = await fetch(`${url}/todo/${id}`, {
        method: "DELETE",
    });
    revalidateTag("todo_list");
    const data = await res.json();
    return data;
};
export const updateTodo = async (id: string, todo: TodoFieldI) => {
    const res = await fetch(`${url}/todo/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });
    revalidateTag("todo_list");
    const data = await res.json();
    return data;
};
