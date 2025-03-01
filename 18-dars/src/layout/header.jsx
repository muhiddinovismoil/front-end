import React from "react";
import { Search } from "./components/search";

export const Header = () => {
    return (
        <div>
            <div className="bg-primary p-[10px] text-center">
                <p className="text-white text-[14px]">
                    Sign up and get 20% off to your first order. Sign Up Now
                </p>
            </div>
            <div className="container flex gap-[40px] py-[24px]">
                <div className="grow">
                    <Search />
                </div>
            </div>
        </div>
    );
};
