"use client";
import React, { useState } from "react";

export const CustomRangeSlider = () => {
    const [value, setValue] = useState(50);

    return (
        <div className="flex items-center justify-center w-full">
            <div className="relative w-[214px] h-[15px]">
                <div className="absolute top-1/2 left-0 w-full h-[6px] bg-gray-300 rounded-full transform -translate-y-1/2"></div>
                <div
                    className="absolute top-1/2 left-0 h-[6px] bg-green-600 rounded-full transform -translate-y-1/2"
                    style={{ width: `${value}%` }}
                ></div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="w-full h-full bg-transparent appearance-none absolute top-0 left-0 cursor-pointer"
                    style={{
                        WebkitAppearance: "none",
                        outline: "none",
                    }}
                />
                <div
                    className="absolute w-[15px] h-[15px] bg-white border-4 border-green-600 rounded-full"
                    style={{
                        top: "50%",
                        left: "0%",
                        transform: "translate(-50%, -50%)",
                    }}
                ></div>
                <div
                    className="absolute w-[15px] h-[15px] bg-white border-4 border-green-600 rounded-full"
                    style={{
                        top: "50%",
                        left: `${value}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                ></div>
            </div>
        </div>
    );
};
