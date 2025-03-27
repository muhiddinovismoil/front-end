"use client";
import React from "react";
import CustomRangeSlider from "../client/custom-range";
import { СategoriesItem } from "@/components/cards/categories";
import { categoriesData, sizeData } from "@/data/data";
import { getCategory } from "@/service/query/getCategorys";
import { IQuery } from "../cards/products";
import { SizeItem } from "../cards/size-item";

export const Filter = ({
    filterFn,
}: {
    filterFn: (filter: IQuery) => void;
}) => {
    const [activeCategory, setActiveCategory] = React.useState<string | null>(
        categoriesData[0].id
    );
    const [activeSize, setActiveSize] = React.useState<number | null>(null);
    const [min, setMin] = React.useState<number>();
    const [max, setMax] = React.useState<number>();
    const RangeFn = (range: number[]) => {
        console.log(range);
        setMin(range[0]);
        setMax(range[1]);
    };

    const { data } = getCategory();
    return (
        <div className=" w-[310px]">
            {" "}
            <div className="bg-[#fbfbfb] flex flex-col ">
                <div>
                    <h2 className="pl-[18px] pt-[19px] pb-[7px] text-[18px] text-[#3d3d3d] font-bold">
                        Categories
                    </h2>
                    <ul className="flex flex-col justify-between h-[360px] pl-[30px] pr-[24px]">
                        {data?.data.map((item) => (
                            <СategoriesItem
                                key={item.id}
                                count={item.products.length}
                                name={item.name}
                                isActive={activeCategory === item.id}
                                onClick={() => {
                                    setActiveCategory(item.id),
                                        filterFn({
                                            category_id: item.id,
                                        });
                                }}
                            />
                        ))}
                    </ul>
                </div>
                <div className="pr-[60px] pt-[36px]">
                    <h2 className="pl-[18px] text-[18px] text-[#3d3d3d] font-bold">
                        Price Range
                    </h2>
                    <div className="pl-[30px] pt-[20px] w-[214px] flex flex-col gap-[16px]">
                        <CustomRangeSlider rangeFn={RangeFn} />
                        <button
                            onClick={() =>
                                filterFn({ minPrice: min, maxPrice: max })
                            }
                            className="cursor-pointer border cerapro-bold-font text-[#fff] leading-[125%] bg-[#42a358] rounded-[6px] w-[90px] py-[8px]"
                        >
                            Filter
                        </button>
                    </div>
                </div>
                <div className="pt-[46px] pb-[5px]">
                    <h2 className="pl-[18px] pb-[7px] text-[18px] text-[#3d3d3d] font-bold">
                        Size
                    </h2>
                    <ul className="pl-[30px] pr-[24px]">
                        {sizeData.map((item, index) => {
                            return (
                                <SizeItem
                                    key={item.id}
                                    id={item.id}
                                    count={item.count}
                                    name={item.name}
                                    isActive={activeSize === index}
                                    onClick={() => {
                                        setActiveSize(index),
                                            filterFn({
                                                size: item.name.toLowerCase(),
                                            });
                                    }}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="w-[312px] h-[470px]">
                <img
                    className="w-full h-full object-cover"
                    src={"/category.svg"}
                    alt="category photo"
                />
            </div>
        </div>
    );
};
