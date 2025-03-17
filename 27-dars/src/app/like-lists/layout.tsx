import React from "react";
import { LikesWrapper } from "../_components/like-product.wrapper";

const LikeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container">
            <div className="flex gap-[100px] pt-[50px]">
                <div className="h-[302px] pt-[34px] w-[320px] gap-[35px] shadow-md bg-white flex flex-col">
                    <div>
                        <LikesWrapper />
                    </div>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default LikeLayout;
