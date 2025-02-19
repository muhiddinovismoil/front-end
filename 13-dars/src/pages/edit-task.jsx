import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { TodoContextProvider } from "../context/todo-context/todo-context";
import React from "react";
import { Form } from "../components/form";

export const EditTask = () => {
    const { id } = useParams();
    const { data, dispatch } = React.useContext(TodoContextProvider);
    const defValue = data.todoList.find((item) => item.id === id);
    const navigate = useNavigate();
    const backToPage = () => {
        navigate("/");
    };
    return (
        <div className="flex gap-[44px]">
            <div className="flex items-center flex-col justify-between">
                <h1 className="font-bold">EDIT TODO TASKS</h1>
                <button
                    onClick={backToPage}
                    className="cursor-pointer flex items-center text-blue-700 rounded-[12px] border px-[5px] py-[6px] mb-[10px]"
                >
                    Back Page <IoArrowBack className="pl-[3px] text-[18px]" />
                </button>
            </div>
            <Form defValue={defValue} />
        </div>
    );
};
