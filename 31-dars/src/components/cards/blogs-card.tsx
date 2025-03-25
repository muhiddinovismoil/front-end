import { BlogsI } from "@/data/types/blogs";
import Image from "next/image";
import React from "react";

export const BlogsCard = ({ id, title, description, img, date }: BlogsI) => {
    return (
        <div>
            <div>
                <Image
                    src={img}
                    width={268}
                    height={195.17}
                    alt="blogposts images"
                />
            </div>
            <div>
                <p>{date}</p>
                <h3>{title}</h3>
                <p>{description}</p>
                <button>Read More →</button>
            </div>
        </div>
    );
};
