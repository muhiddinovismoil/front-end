"use client";
import React, { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="flex items-center gap-[23px]">
            <button
                onClick={decrement}
                className="w-[33px] cursor-pointer h-[38px] rounded-[31px] bg-[#42a358] text-lg text-[#fff]"
            >
                -
            </button>
            <p className="text-xl font-bold">{count}</p>
            <button
                onClick={increment}
                className="w-[33px] cursor-pointer h-[38px] rounded-[31px] bg-[#42a358] text-lg text-[#fff]"
            >
                +
            </button>
        </div>
    );
};
