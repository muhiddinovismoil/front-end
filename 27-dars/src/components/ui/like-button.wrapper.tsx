"use client";
import dynamic from "next/dynamic";
import { ProductI } from "@/app/data/types/mock-data.type";

const LikeButton = dynamic(() => import("./like-button"), { ssr: false });

interface LikeButtonWrapperProps {
    product: ProductI;
}

export const LikeButtonWrapper = ({ product }: LikeButtonWrapperProps) => {
    return <LikeButton product={product} />;
};
