"use client";
import React from "react";
import { ProductType } from "../client/product-type";
import { ProductCard } from "./product-card";
import { getProducts, IState } from "@/service/query/getProduct";
import { Filter } from "../filter/filter";
import LoadingSpinner from "../loading/loading";

export interface IQuery {
    category_id?: string;
    type?: string;
    size?: string;
    minPrice?: number;
    maxPrice?: number;
}

export const Products = () => {
    const [type, setType] = React.useState<string[]>([
        "All Plants",
        "New Arrivals",
        "Sale",
    ]);
    const [isActiveStatus, setIsActiveStatus] = React.useState<number | null>(
        0
    );
    const [filter, setFilter] = React.useState<IState | null>(null);
    const filterFn = (filter: IQuery) => {
        setFilter((prev) => ({
            ...prev,
            query: { ...prev?.query, ...filter },
        }));
    };
    const { data, isLoading } = getProducts(
        filter ?? { page: 1, limit: 9, query: {} }
    );
    return (
        <>
            <Filter filterFn={(filter: IQuery) => filterFn(filter)} />
            <div className="w-[100%]">
                <div className="flex pb-[31px] justify-between">
                    <div className="flex gap-8">
                        {type.map((item, index) => {
                            return (
                                <ProductType
                                    key={index}
                                    text={item}
                                    isActive={index === isActiveStatus}
                                    onClick={() => {
                                        setIsActiveStatus(index);
                                        filterFn({
                                            type:
                                                item == "All Plants"
                                                    ? undefined
                                                    : item == "New Arrivals"
                                                    ? "new"
                                                    : "sale",
                                        });
                                    }}
                                />
                            );
                        })}
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <p className="text-[15px]">Short by:</p>
                        <select name="sort" id="sort" className="outline-0">
                            <option className="text-[15px]" value="default">
                                Default sorting
                            </option>
                        </select>
                    </div>
                </div>
                {isLoading ? (
                    <LoadingSpinner />
                ) : data?.data.products.length === 0 ? (
                    <div className=" flex  flex-col items-center justify-center mt-[30%]">
                        <p className="text-4xl font-bold  text-[#42a358]">
                            NO DATA
                        </p>
                        <button
                            onClick={() => setFilter(null)}
                            className="text-[18px] px-[27px] py-[8px] rounded-[6px] mt-[10px] font-bold  text-[#fff] bg-[#42a358]"
                        >
                            Reset
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-3 gap-x-[80px] gap-y-[70px]">
                        {data?.data?.products?.map((item) => {
                            return (
                                <ProductCard
                                    key={item.id}
                                    id={item.id}
                                    name={item.title}
                                    price={item.price}
                                    image={item.picture}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
};
