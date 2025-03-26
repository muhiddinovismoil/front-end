import { ProductI } from "@/data/types/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProductCard = ({
    id,
    name,
    discount_p,
    discounted_price,
    price,
    image,
}: ProductI) => {
    return (
        <div className="flex flex-col w-[258px] group gap-y-[12px] h-[350px]">
            <div className="relative group-hover:border-t-[#42a358] group-hover:border-t-2 h-[250px]">
                <Image
                    src={image}
                    alt="product image"
                    width={250}
                    height={250}
                    style={{ width: "auto", height: "auto" }}
                />
                <div className="group-hover:opacity-100 opacity-0 flex gap-[10px] absolute bottom-0 left-[67px]">
                    <button className="w-[35px]  flex justify-center items-center h-[35px] rounded-[4px] bg-[#fff]">
                        <img src="/hover/cart.svg" alt="icon" />
                    </button>
                    <button className="w-[35px]  flex justify-center items-center h-[35px] rounded-[4px] bg-[#fff]">
                        <img src="/hover/like.svg" alt="icon" />
                    </button>
                    <button className="w-[35px]  flex justify-center items-center h-[35px] rounded-[4px] bg-[#fff]">
                        <img src="/hover/search.svg" alt="icon" />
                    </button>
                </div>
                {discount_p ? (
                    <p className="absolute py-[6px] px-[7px] text-[#fff] font-medium top-[10px] left-0 bg-[#42a358]">
                        {discount_p}
                    </p>
                ) : null}
            </div>
            <div className="flex flex-col gap-y-[6px]">
                <Link href={`/shop/${id}`} className="text-[#3d3d3d]">
                    {name}
                </Link>
                <div className="flex gap-[16px] items-center">
                    <p className="cerapro-bold-font text-[18px] text-[#46a358]">
                        {price}
                    </p>
                    {discounted_price ? (
                        <p className="text-[#a5a5a5] leading-[89%] line-through text-[18px]">
                            {discounted_price}
                        </p>
                    ) : null}
                </div>
            </div>
        </div>
    );
};
