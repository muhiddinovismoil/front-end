/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TodoContextProvider } from "../context/todo-context/todo-context";
import { todoAction } from "../context/todo-context/todo-reducer";
import { nanoid } from "nanoid";
export const Form = ({ defValue }) => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: defValue?.title,
            description: defValue?.description,
        },
    });

    const { dispatch } = useContext(TodoContextProvider);

    const navigate = useNavigate();

    const submit = (data) => {
        if (!defValue) {
            dispatch({
                type: todoAction.CREATE_TODO,
                value: {
                    ...data,
                    id: nanoid(),
                },
            });
        } else {
            dispatch({
                type: todoAction.EDIT_TODO,
                value: { ...data, id: defValue.id },
            });
        }
        navigate("/");
    };
    return (
        <>
            <div className="flex w-[400px]">
                <form
                    onSubmit={handleSubmit(submit)}
                    className="flex items-center gap-[60px]"
                >
                    <div className="flex flex-col gap-[12px] ">
                        <input
                            className="outline-0 border w-[300px] rounded-[14px] py-[10px] pl-[12px] text-[18px]"
                            placeholder="Enter value for title ..."
                            name="title"
                            type="text"
                            {...register("title", {
                                required: true,
                                minLength: {
                                    value: 3,
                                    message: "Eng kam qiymat 3ta",
                                },
                            })}
                        />
                        {errors.title && (
                            <p className="text-[12px] text-red-500">
                                {errors.title.message}
                            </p>
                        )}
                        <input
                            className="outline-0 border w-[300px] rounded-[14px] py-[10px] pl-[12px] text-[18px]"
                            placeholder="Enter value for description ..."
                            name="description"
                            type="text"
                            {...register("description", {
                                required: true,
                                minLength: {
                                    value: 3,
                                    message: "Eng kam qiymat 3ta",
                                },
                            })}
                        />
                        {errors.description && (
                            <p className="text-[12px] text-red-500">
                                {errors.description.message}
                            </p>
                        )}
                    </div>
                    <button
                        className="cursor-pointer bg-orange-400 py-[7px] px-[14px] rounded-[8px]"
                        type="submit"
                    >
                        SAVE
                    </button>
                </form>
            </div>
        </>
    );
};
