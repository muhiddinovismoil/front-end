import React from "react";
import garbageIco from "../../../assets/cart/garbage-icon.svg";
export const CartItems = ({ data, userCount, onRemove }) => {
    return (
        <>
            <div className="max-w-[124px] flex grow ">
                <img className="w-[124px] h-[124px]" src={data.img} alt="" />
            </div>
            <ul className="flex gap-[75px] max-w-[527px] grow">
                <li className="max-w-[227px] flex grow flex-col gap-[15px]">
                    <div>
                        <p className="font-bold text-[20px]">{data.name}</p>
                        <p className="text-[14px] font-normal">
                            Size:{" "}
                            <span className="text-[rgba(0,0,0,0.6)]">
                                {data.size}
                            </span>
                        </p>
                        <p className="text-[14px] font-normal">
                            Color:{" "}
                            <span className="text-[rgba(0,0,0,0.6)]">
                                {data.color}
                            </span>
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-[24px]">${data.price}</p>
                    </div>
                </li>
                <li className="flex flex-col  gap-[59px] max-w-[225px] grow justify-between">
                    <div className="relative">
                        <img
                            onClick={() => onRemove()}
                            className="cursor-pointer absolute right-0"
                            src={garbageIco}
                            alt="garbage icon"
                        />
                    </div>
                    <div className="flex bg-light-grey gap-[20px] max-w-[126px] items-center py-[12px] px-[20px] ml-auto rounded-[62px]">
                        <button
                            onClick={() => decrement()}
                            className="cursor-pointer text-[20px]"
                        >
                            -
                        </button>
                        <p>{userCount}</p>
                        <button
                            onClick={() => increment()}
                            className="cursor-pointer text-[20px]"
                        >
                            +
                        </button>
                    </div>
                </li>
            </ul>
        </>
    );
};
