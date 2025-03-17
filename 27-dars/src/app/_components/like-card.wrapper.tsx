"use client";
import dynamic from "next/dynamic";
const LikeListCard = dynamic(() => import("./like-list.card"), {
    ssr: false,
});
export const LikeListCardWrapper = () => {
    return (
        <div>
            <LikeListCard />
        </div>
    );
};
