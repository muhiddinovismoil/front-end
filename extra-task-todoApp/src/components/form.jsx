/* eslint-disable react/prop-types */
import { useState } from "react";

export const Form = ({ addTodo }) => {
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
            addTodo(inputs.title, inputs.description);
            setInputs({ title: "", description: "" });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col w-[300px]">
                <label className="pt-[12px] font-bold" htmlFor="title">
                    Title
                </label>
                <input
                    className="pl-[14px] bg-[#7df183] rounded-[6px] outline-0 pt-[10px] pb-[10px]"
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Enter todo title..."
                    value={inputs.title}
                    onChange={handleChange}
                />
                <label className="pt-[18px] font-bold" htmlFor="description">
                    Description
                </label>
                <input
                    id="description"
                    className="pl-[14px] bg-[#7df183] rounded-[6px] outline-0 pt-[10px] pb-[10px]"
                    name="description"
                    type="text"
                    placeholder="Enter todo description..."
                    value={inputs.description}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="border-[1px] bg-blue-500 border-[#b19a9adc] text-[#000] rounded-[8px] mt-[12px] pt-[12px] pb-[12px] pl-[134px] pr-[134px]"
                >
                    ADD
                </button>
            </form>
        </>
    );
};
