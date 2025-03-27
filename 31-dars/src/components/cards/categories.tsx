"use client";
import React from "react";

interface CategoryI {
    name: string;
    count: number;
    isActive: boolean;
    onClick: () => void;
}

export const СategoriesItem: React.FC<CategoryI> = ({
    name,
    count,
    isActive,
    onClick,
}: CategoryI) => {
    return (
        <li className="flex justify-between cursor-pointer" onClick={onClick}>
            <p
                className={`leading-[267%] cerapro-bold-font text-[15px] transition-all ${
                    isActive ? "text-[#42a358] font-bold" : "text-black"
                }`}
            >
                {name}
            </p>
            <p
                className={`leading-[267%] cerapro-bold-font text-[15px] transition-all ${
                    isActive ? "text-[#42a358] font-bold" : "text-black"
                }`}
            >
                ({count})
            </p>
        </li>
    );
};
