import { ProductI } from "@/data/types/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProductCard = ({ id, name, price, image }: ProductI) => {
    return (
        <div className="flex flex-col w-[258px] group gap-y-[12px] h-[350px]">
            <div className="relative group-hover:border-t-[#42a358] group-hover:border-t-2 h-[250px]">
                <Image
                    src={image}
                    alt="product image"
                    width={200}
                    height={200}
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
            </div>
            <div className="flex flex-col gap-y-[6px]">
                <Link href={`/shop/${id}`} className="text-[#3d3d3d]">
                    {name}
                </Link>
                <div className="flex gap-[16px] items-center">
                    <p className="cerapro-bold-font text-[18px] text-[#46a358]">
                        {price}
                    </p>
                </div>
            </div>
        </div>
    );
};
