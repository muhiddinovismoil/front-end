import React from "react";
import cartIco from "/public/cart.svg";
import { ProductI } from "../data/types/mock-data.type";
export const Product = ({
    id,
    name,
    badge,
    price,
    discounted_price,
    halal,
    img,
}: ProductI) => {
    return (
        <div className="rounded-t-[6px] rounded-r-[6px] bg-white rounded-l-[6px] pb-[21px]">
            <div className="relative">
                {badge ? (
                    <span className="absolute top-[20px] left-[20px] rounded-[6px] text-[white] text-[14px] font-normal bg-[#ff7a50] px-[8px] py-[5px]">
                        {badge}
                    </span>
                ) : null}
                <img src={img} alt="product image" />
                {halal ? (
                    <div className="absolute top-[20px] right-[20px]">
                        <img src={halal} alt="halal certificate" />
                    </div>
                ) : null}
            </div>
            <div className="mx-[18px] flex flex-col gap-[7px]">
                <h2 className="cursor-pointer text-[14px] font-normal leading-[150%] text-[#999]">
                    Qo'y bo'yin (muzlatilgan)
                </h2>
                <div className="flex gap-[12px] items-center">
                    <h3 className="text-[24px] leading-[100%] font-bold text-[#0d1136]">
                        7,040 <span className="text-[15px]">₩</span>
                    </h3>
                    <p className="text-[15px] font-normal leading-[100%] text-[#77798c] line-through">
                        8,800 ₩
                    </p>
                </div>
            </div>
            <button className="mt-[13px] mx-[18px] px-[74px] cursor-pointer rounded-[6px] bg-[#f3f3f3] py-[10px] justify-center flex items-center gap-[10px]">
                <img src={cartIco.src} alt="cart icon" />
                Qo'shish
            </button>
        </div>
    );
};
