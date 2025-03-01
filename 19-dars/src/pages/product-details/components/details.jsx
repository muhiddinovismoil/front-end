import React from "react";

export const Details = ({
    id,
    name,
    price,
    rating,
    about,
    old_price,
    discount,
}) => {
    return (
        <>
            <h2 className="secondFont text-[40px] font-bold">{name}</h2>
            <div className="max-w-[193px] mt-[12px]">
                <img className="w-full" src={rating} alt="product rates" />
            </div>
            <div className="flex py-[12px] gap-[12px] items-center">
                <div className="flex gap-[12px]">
                    <p className="font-bold text-[32px]">{price}</p>
                    {!old_price ? null : (
                        <p className="font-bold text-[32px] line-through  text-[rgba(0,0,0,0.3)]">
                            {old_price}
                        </p>
                    )}
                </div>
                {!discount ? null : (
                    <p className="py-[6px] px-[14px] bg-[rgba(255,51,51,0.1)] rounded-[62px] text-[#f33]">
                        {discount}
                    </p>
                )}
            </div>
            <p className="leading-[137%] text-[rgba(0,0,0,0.6)] pb-[22px] font-normal">
                {about}
            </p>
        </>
    );
};
