"use client";
import { categoriesData } from "@/data/data";
import { СategoriesItem } from "@/components/cards/categories";
import React, { useState } from "react";

export const CategoriesList = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(
        categoriesData[0].id
    );

    return (
        <ul className="flex flex-col justify-between h-[360px] pl-[30px] pr-[24px]">
            {categoriesData.map((item) => (
                <СategoriesItem
                    key={item.id}
                    id={item.id}
                    count={item.count}
                    name={item.name}
                    isActive={activeCategory === item.id}
                    onClick={() => setActiveCategory(item.id)}
                />
            ))}
        </ul>
    );
};
