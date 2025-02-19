/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TodoContextProvider } from "../context/todo-context/todo-context";
import { todoAction } from "../context/todo-context/todo-reducer";
export const TaskCard = ({ id, title, description }) => {
    const navigate = useNavigate();
    const changeData = () => {
        navigate(`/edit-todo/${id}`);
    };
    const { dispatch } = useContext(TodoContextProvider);
    const deleteData = () => {
        dispatch({
            type: todoAction.DELETE_TODO,
            value: {
                id: id,
            },
        });
    };
    return (
        <div
            className="flex w-[700px] py-[20px] rounded-2xl px-[20px] justify-between border border-blue-500 items-center mb-[30px]"
            key={id}
        >
            <div>
                <h2 className="text-[20px] font-bold">{title}</h2>
                <p className="font-medium mt-[16px] text-[14px] opacity-[0.7]">
                    {description}
                </p>
            </div>
            <div className="flex gap-[16px]">
                <button
                    onClick={changeData}
                    className="cursor-pointer flex items-center"
                >
                    <FaEdit className="text-green-500 text-[32px]" />
                </button>
                <button
                    onClick={deleteData}
                    className="cursor-pointer flex items-center"
                >
                    <MdDelete className="text-red-500 text-[32px]" />
                </button>
            </div>
        </div>
    );
};
