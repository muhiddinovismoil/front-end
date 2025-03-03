import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/header/search-icon";
import CartIcon from "../../assets/header/cart-icon";
import ContactIcon from "../../assets/header/contact-icon";

export const Search = () => {
    return (
        <>
            <div className="flex items-center gap-[40px]">
                <div>
                    <Link to={"/"}>
                        <img src={logo} alt="img" />
                    </Link>
                </div>
                <div className="flex gap-[24px]">
                    <Link to={"/"}>Shop</Link>
                    <Link to={"/"}>On Sale</Link>
                    <Link to={"/"}>New Arrivals</Link>
                    <Link to={"/"}>Brands</Link>
                </div>
                <div className="grow relative">
                    <SearchIcon className="absolute left-[17.86px] top-[13.86px]" />
                    <input
                        className="w-full bg-light-grey py-[13px] pl-[57px] outline-0 rounded-[62px]"
                        placeholder="Search for products..."
                    />
                </div>
                <div className="flex gap-[17.75px]">
                    <div>
                        <Link to={"/cart-items"}>
                            <CartIcon />
                        </Link>
                    </div>
                    <div>
                        <Link to={"/contact"}>
                            <ContactIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
