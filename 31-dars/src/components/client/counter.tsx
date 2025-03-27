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
        <div className="flex items-center">
            <button
                onClick={decrement}
                className="px-3 py-2 bg-gray-200 rounded text-lg"
            >
                -
            </button>
            <p className="text-xl font-bold">{count}</p>
            <button
                onClick={increment}
                className="px-3 py-2 bg-gray-200 rounded text-lg"
            >
                +
            </button>
        </div>
    );
};
