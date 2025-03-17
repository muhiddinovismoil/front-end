"use client";
import React from "react";
import { useSelector } from "react-redux";

const LikesCount = () => {
    const likesCount: number = useSelector(
        (state: any) => state.likeListSlice.count
    );
    return (
        <div className="p-[30px] text-2xl font-bold">
            <h2>Total count of likes: {likesCount}</h2>
        </div>
    );
};
export default LikesCount;
