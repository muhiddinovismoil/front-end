import { BlogsI } from "@/data/types/blogs";
import Image from "next/image";
import React from "react";

export const BlogsCard = ({ id, title, description, img, date }: BlogsI) => {
    return (
        <div className="bg-[#fbfbfb]">
            <div>
                <Image
                    src={img}
                    width={268}
                    height={195.17}
                    alt="blogposts images"
                />
            </div>
            <div className="pl-[15px] pr-[11px] pt-[9px] pb-[13px]">
                <p className="leading-[114%] text-[14px] font-medium text-[#42a358] ">
                    {date}
                </p>
                <h3 className="leading-[130%] text-[20px] text-[#3d3d3d] cerapro-bold-font w-[189px]">
                    {title}
                </h3>
                <p className="text-[14px] text-[#727272] w-[242px] leading-[157%]">
                    {description}
                </p>
                <button className="text-[14px] text-[#3d3d3d] leading-[114%] font-medium">
                    Read More →
                </button>
            </div>
        </div>
    );
};
