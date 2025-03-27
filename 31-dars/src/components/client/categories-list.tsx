"use client";
import { categoriesData } from "@/data/data";
import { СategoriesItem } from "@/components/cards/categories";
import React, { useState } from "react";
import { Category } from "@/data/types/category";

export const CategoriesList = ({ data }: { data: Category[] }) => {
    const [activeCategory, setActiveCategory] = useState<string | null>(
        categoriesData[0].id
    );
    return (
        <ul className="flex flex-col justify-between h-[360px] pl-[30px] pr-[24px]">
            {data.map((item) => (
                <СategoriesItem
                    key={item.id}
                    count={item.products.length}
                    name={item.name}
                    isActive={activeCategory === item.id}
                    onClick={() => setActiveCategory(item.id)}
                />
            ))}
        </ul>
    );
};
