import React from "react";
import { SizeItem } from "../cards/size-item";
import { sizeData } from "@/data/data";

export const SizeList = () => {
    return (
        <ul className="pl-[30px] pr-[24px]">
            {sizeData.map((item) => {
                return (
                    <SizeItem
                        key={item.id}
                        id={item.id}
                        count={item.count}
                        name={item.name}
                    />
                );
            })}
        </ul>
    );
};
