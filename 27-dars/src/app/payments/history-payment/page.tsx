import React from "react";
import { HistoryCard } from "./_components/history-card";
import { paymentHistory } from "@/app/data/payment-history";

const HistoryPayment = () => {
    return (
        <div className="pl-[125px]">
            <div>
                <p className="text-[20px] font-semibold text-[#0d1136]">
                    To’lov tarixi
                </p>
                <select
                    className="opacity-[0.3] w-[100px] h-[30px] border-[3px] border-[#f3f3f3]"
                    name="category"
                    id="category"
                >
                    <option value="all">Barchasi</option>
                </select>
                <div className="flex flex-col w-[800px] gap-[24px]">
                    {paymentHistory.map((item) => {
                        return (
                            <HistoryCard
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                date={item.date}
                                networkType={item.networkType}
                                phone_number={item.phone_number}
                                status={item.status}
                                sum={item.sum}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HistoryPayment;
