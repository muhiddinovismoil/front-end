"use client";
import { removeProductFromCart, toggleAmout } from "@/store/cart/cart.reducer";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

export const CartCard = ({
    id,
    img,
    name,
    price,
    count,
    discount,
}: {
    id: string;
    img: string;
    name: string;
    price: string;
    count: number;
    discount: string | null;
}) => {
    const dispatch = useDispatch();
    const numericPrice = Number(price) || 0;
    const numericDiscount = Number(discount) || 0;
    const [isMounted, setIsMounted] = React.useState(false);
    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    const deleteProduct = () => {
        dispatch(removeProductFromCart({ id }));
    };
    return (
        <div className="flex gap-[20px] items-center">
            <div className="h-[70px] gap-[14px] flex items-center w-[280px]">
                <Image width={70} height={70} src={img} alt="product image" />
                <div>
                    <p className="text-[#3d3d3d] cerapro-bold-font">{name}</p>
                    <p>SKU: 1995751877966</p>
                </div>
            </div>
            <p className="w-[120px] text-[#727272] leading-[100%] cerapro-bold-font">
                ${price}
            </p>
            <div className="flex justify-center gap-[11px] w-[115px] items-center">
                <button
                    onClick={() => dispatch(toggleAmout({ type: false, id }))}
                    disabled={count == 1 ? true : false}
                    className="w-[21.71px] h-[25px] bg-[#42a358] text-[#fff] text-[18px] rounded-[31px]"
                >
                    -
                </button>
                <p className="pl-[5.29px]">{count}</p>
                <button
                    onClick={() => dispatch(toggleAmout({ type: true, id }))}
                    className="w-[21.71px] h-[25px] bg-[#42a358] text-[#fff] text-[18px] rounded-[31px]"
                >
                    +
                </button>
            </div>
            <p className="ml-[40px] w-[70px] text-[#42a358] cerapro-bold-font">
                $
                {numericDiscount
                    ? (
                          (numericPrice -
                              (numericPrice * numericDiscount) / 100) *
                          count
                      ).toFixed(2)
                    : numericPrice * count}
            </p>
            <button
                className="ml-[5px] flex cursor-pointer p-[5px] items-center"
                onClick={deleteProduct}
            >
                <img src="/trash.svg" alt="trash icon" />
            </button>
        </div>
    );
};
