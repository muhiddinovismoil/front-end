"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addProductToLikeList,
    removeProductFromLikeList,
} from "@/store/LikeList/like-list";
import activeLike from "/public/like/active-like.svg";
import inActiveLike from "/public/like/inactive-like.svg";
import { ProductI } from "@/app/data/types/mock-data.type";

interface LikeButtonProps {
    product: ProductI;
}

export const LikeButton = ({ product }: LikeButtonProps) => {
    const dispatch = useDispatch();
    const likes = useSelector((state: any) => state.likeListSlice.likes);
    const isLiked = likes.some((item: ProductI) => item.id === product.id);

    const onClick = () => {
        if (isLiked) {
            dispatch(removeProductFromLikeList({ id: product.id }));
        } else {
            dispatch(addProductToLikeList(product));
        }
    };

    return (
        <button
            onClick={onClick}
            className="h-[55px] cursor-pointer absolute bottom-0 right-[15px]"
        >
            <img
                className="w-[40px]"
                src={isLiked ? activeLike.src : inActiveLike.src}
                alt={isLiked ? "active like" : "inactive like"}
            />
        </button>
    );
};
