"use client";
import dynamic from "next/dynamic";

const LikesCount = dynamic(() => import("./liked-products.count"), {
    ssr: false,
});

export const LikesWrapper = () => {
    return (
        <div>
            <LikesCount />
        </div>
    );
};
