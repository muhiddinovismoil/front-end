import { TodoForm } from "@/components/todo-form";
import React from "react";

const EditTodo = ({ params }: { params: { id: string } }) => {
    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold mt-[15px]">Edit todo</h2>
            <TodoForm id={params?.id} />
        </div>
    );
};
export default EditTodo;
