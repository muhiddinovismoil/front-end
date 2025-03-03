import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({
    id,
    name,
    img,
    rate,
    price,
    old_price,
    discount,
}) => {
    const navigate = useNavigate();
    const productDetails = () => {
        navigate(`/product-detail/${id}`);
    };
    return (
        <div>
            <div onClick={productDetails} className="pb-[18px] cursor-pointer">
                <img src={img} alt="product image" />
            </div>
            <div className="flex flex-col gap-[8px]">
                <h3
                    onClick={productDetails}
                    className="text-[20px] font-bold cursor-pointer"
                >
                    {name}
                </h3>
                <div>
                    <img src={rate} alt="rating image" />
                </div>
                <div className="flex items-center gap-[10px]">
                    <p className="text-[24px] font-bold">${price}</p>
                    {!old_price ? (
                        ""
                    ) : (
                        <>
                            <p className="text-[24px] font-bold line-through text-gray">
                                ${old_price}
                            </p>
                            <p className="py-[6px] px-[13.5px] text-[12px] font-medium bg-pink rounded-[62px] text-danger">
                                {discount}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
