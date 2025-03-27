"use client";
import { SizeI } from "@/data/types/size";
import React from "react";

export const SizeItem = ({ id, name, count, isActive, onClick }: SizeI) => {
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
