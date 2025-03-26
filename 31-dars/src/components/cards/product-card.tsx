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
        <div className="flex flex-col w-[258px] gap-y-[12px] h-[350px]">
            <div className="relative h-[250px]">
                <Image
                    src={image}
                    alt="product image"
                    width={250}
                    height={250}
                />
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
