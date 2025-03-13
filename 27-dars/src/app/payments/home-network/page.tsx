import { paymentsCard } from "@/app/data/payments";
import React from "react";
import { NetworkCards } from "./_components/network-cards";

const HomeNetwork = () => {
    return (
        <div className="flex flex-col gap-[39.93px] pl-[125px]">
            <div>
                <p className="text-[20px] font-semibold text-[#0d1136]">
                    To’lov xizmatlari
                </p>
                <p className="text-[14px] font-semibold text-[#0d1136]">
                    Uyali aloqa
                </p>
            </div>
            <div className="grid grid-cols-4 gap-[40px]">
                {paymentsCard.map((item) => {
                    return (
                        <NetworkCards
                            key={item.id}
                            img={item.img}
                            id={item.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default HomeNetwork;
