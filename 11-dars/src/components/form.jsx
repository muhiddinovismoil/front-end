/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import { useState } from "react";
import { request } from "../config/request";

export const Form = ({ globalFunc }) => {
    const addItem = (id, title, description) => {
        request.post("/todos", {
            id: id,
            title: title,
            description: description,
        });
        globalFunc();
    };
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputs.title.trim() && inputs.description.trim()) {
            addItem(nanoid(), inputs.title, inputs.description);
            setInputs({ title: "", description: "" });
        }
    };
    return (
        <>
            <div className="container pt-[30px]">
                <form
                    onSubmit={handleSubmit}
                    className="flex justify-center items-center py-[30px]"
                >
                    <div className="flex gap-[50px] items-center">
                        <div className="flex flex-col gap-[10px]">
                            <input
                                className="outline-1 w-[320px] py-[10px] rounded-[12px] pl-[20px] text-[18px]"
                                onChange={handleChange}
                                required
                                type="text"
                                name="title"
                                autoComplete="off"
                                value={inputs.title}
                                placeholder="Enter title ..."
                            />
                            <input
                                className="outline-1 w-[320px] py-[10px] rounded-[12px] pl-[20px] text-[18px]"
                                onChange={handleChange}
                                type="text"
                                required
                                autoComplete="off"
                                name="description"
                                value={inputs.description}
                                placeholder="Enter description ..."
                            />
                        </div>
                        <div>
                            <button
                                className="bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-[14px] px-[20px] py-[14px] border-[1px] text-amber-50 cursor-pointer"
                                type="submit"
                            >
                                ADD
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
