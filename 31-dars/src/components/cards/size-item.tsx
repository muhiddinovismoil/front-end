import { SizeI } from "@/data/types/size";
import React from "react";

export const SizeItem = ({ id, name, count }: SizeI) => {
    return (
        <li className="flex justify-between">
            <p className="leading-[267%] text-[15px] text-[#3d3d3d]">{name}</p>
            <p className="leading-[267%] text-[15px] text-[#3d3d3d]">
                ({count})
            </p>
        </li>
    );
};
