import React from "react";

export const ProductReview = ({
    id,
    verified,
    from,
    rate,
    published,
    content,
}) => {
    return (
        <div className="max-w-[610px] flex flex-col border border-[rgba(0,0,0,0.1)] rounded-[20px] px-[32px] py-[28px] gap-[24px]">
            <div className="flex flex-col gap-[18px]">
                <div>
                    <img src={rate} alt="" />
                </div>
                <div className="flex flex-col gap-[16.5px] ">
                    <div className="flex items-center gap-[6.25px]">
                        <h2 className="font-bold text-[20px] leading-[110%]">
                            {from}
                        </h2>
                        <img src={verified} alt="verified" />
                    </div>
                    <p className="leading-[137%] max-w-[522px] text-[rgba(0,0,0,0.6)]">
                        {content}
                    </p>
                </div>
            </div>
            <p className="font-medium leading-[137%] text-[rgba(0,0,0,0.6)]">
                {published}
            </p>
        </div>
    );
};
