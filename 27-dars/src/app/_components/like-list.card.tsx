"use client";
import React from "react";
import { ProductI } from "../data/types/mock-data.type";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromLikeList } from "@/store/LikeList/like-list";

const CardLikedProduct = () => {
    const dispatch = useDispatch();
    const likedProducts: ProductI[] = useSelector(
        (state: any) => state.likeListSlice.likes
    );
    const onDelete = (id: string) => {
        dispatch(removeProductFromLikeList({ id }));
    };
    return (
        <div className="flex flex-col gap-[20px] overflow-hidden">
            {likedProducts.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        <div
                            key={item.id}
                            className="flex gap-[25px] border rounded-2xl overflow-hidden"
                        >
                            <div className="h-[80px] pl-[5px]">
                                <img
                                    src={item.img}
                                    className="h-full"
                                    alt="image"
                                />
                            </div>
                            <div className="flex items-center justify-between w-full px-[16px]">
                                <div className="flex flex-col gap-[15px]">
                                    <h3 className="font-medium text-[20px] opacity-[0.4]">
                                        {item.name}
                                    </h3>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-[18px] flex gap-[5px] items-center">
                                            {item.price}
                                            <span className="text-[12px]">
                                                ₩
                                            </span>
                                        </p>
                                        <p className="text-[16px] font-bold line-through text-[#c7c7ce]">
                                            {item.discounted_price}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-[8px]">
                                    <button
                                        onClick={() => onDelete(item.id)}
                                        className="bg-red-500 text-white py-[4px] px-[14px] rounded-2xl text-[14px] cursor-pointer"
                                    >
                                        Delete
                                    </button>
                                    <button className="bg-black text-white py-[4px] px-[14px] rounded-2xl text-[14px] cursor-pointer">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    );
};
export default CardLikedProduct;
