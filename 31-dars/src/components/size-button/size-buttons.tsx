"use client";
import React, { useState } from "react";

export const SizeButtons = () => {
    const [activeSize, setActiveSize] = useState<string | null>(null);

    const sizes = ["S", "M", "L", "XL"];

    return (
        <div className="flex gap-[10px] w-[142px] pt-[11px]">
            {sizes.map((size) => (
                <button
                    key={size}
                    className={`h-[28px] w-[28px] rounded-[100%] border text-[14px] leading-[114%] cursor-pointer 
                        ${
                            activeSize === size
                                ? "text-[18px] text-[#42a358] leading-[89%] text-center cerapro-bold-font border-[#42a358]"
                                : "border-[#eaeaea] text-black"
                        }`}
                    onClick={() => setActiveSize(size)}
                >
                    {size}
                </button>
            ))}
        </div>
    );
};
