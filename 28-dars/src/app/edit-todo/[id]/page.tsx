import { TodoForm } from "@/components/todo-form";
import React from "react";

const EditTodo = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold mt-[15px]">Edit todo</h2>
            <TodoForm id={id} />
        </div>
    );
};
export default EditTodo;
