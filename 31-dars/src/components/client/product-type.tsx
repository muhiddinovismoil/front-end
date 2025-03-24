"use client";
import React, { useState } from "react";

const productsType = [
    { id: 1, name: "All Plants" },
    { id: 2, name: "New Arrivals" },
    { id: 3, name: "Sale" },
];

export const ProductType = () => {
    const [selected, setSelected] = useState<number>(1);

    return (
        <div className="flex gap-8">
            {productsType.map((item) => (
                <button
                    key={item.id}
                    className={`relative pb-2 text-[15px] transition duration-300 ${
                        selected === item.id
                            ? "text-green-600 cerapro-bold-font"
                            : "text-gray-600"
                    }`}
                    onClick={() => setSelected(item.id)}
                >
                    {item.name}
                    {selected === item.id && (
                        <span className="absolute left-0 bottom-0 w-full h-[3px] bg-green-600"></span>
                    )}
                </button>
            ))}
        </div>
    );
};
