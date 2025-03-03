import React from "react";

export const CommentsCard = ({ id, from, description, verified, rate }) => {
    return (
        <div className="px-[32px] pt-[28px] h-[240px] border border-[rgba(0,0,0,0.1)] rounded-[20px]">
            <div>
                <img src={rate} alt="rating" />
            </div>
            <div className="flex pt-[15px] gap-[6.25px] pb-[12px]">
                <h2 className="font-bold text-[20px] leading-[110%]">{from}</h2>
                <img src={verified} alt="verified icon" />
            </div>
            <div>
                <p className="text-[16px] font-normal leading-[137%] text-[rgba(0,0,0,0.6)]">
                    {description}
                </p>
            </div>
        </div>
    );
};
