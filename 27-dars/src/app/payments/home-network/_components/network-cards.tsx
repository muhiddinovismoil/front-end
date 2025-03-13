import { PaymentCardI } from "@/app/data/types/payment.type";
import React from "react";

export const NetworkCards = ({ id, img }: PaymentCardI) => {
    return (
        <div>
            <div className="px-[25px] pt-[48px] pb-[47px] border border-[#f2f2f2] rounded-[10px]">
                <img className="" src={img} alt="network icons" />
            </div>
        </div>
    );
};
