import { HistoryPaymentI } from "@/app/data/types/history-payment.type";
import React from "react";

export const HistoryCard = ({
    id,
    img,
    networkType,
    phone_number,
    sum,
    status,
    date,
}: HistoryPaymentI) => {
    return (
        <div className="rounded-[4px] border-[1.50px] mt-[16px] border-[#f2f2f2] py-[16px] pl-[16px] pr-[24px] flex items-center">
            <div className="max-w-[80px] px-[13.94px] py-[20.24px]">
                <img
                    className="w-[52px] h-[27px]"
                    src={img}
                    alt="network type icon"
                />
            </div>
            <div className="flex flex-col gap-[20px] pl-[15px] w-[656px]">
                <div className="flex justify-between">
                    <p className="text-[14px] font-normal text-[#606060]">
                        {networkType}
                    </p>
                    <p className="font-normal text-[12px] text-[#606060]">
                        {date}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="text-[14px] text-[#0d1136] font-medium leading-[114%]">
                        {phone_number} -{" "}
                        <span className="text-[#019e7f] text-[14px] font-medium leading-[114%]">
                            {sum}
                        </span>
                    </p>
                    <p
                        className={`py-[3px] px-[14px] rounded-[2px] text-[12px] font-normal
        ${
            status === "Bekor qilindi"
                ? "text-[#f34336] bg-[#feedeb]"
                : status === "Kutilmoqda"
                ? "text-[#f3a736] bg-[#fef7eb]"
                : status === "To’landi"
                ? "text-[#0e8f72] bg-[#e6f6f3]"
                : ""
        }
    `}
                    >
                        {status}
                    </p>
                </div>
            </div>
        </div>
    );
};
