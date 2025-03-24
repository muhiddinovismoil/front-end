import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeaderLinkWrapper } from "./wrapper/header-link.wrapper";

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="pt-[25px]">
                    <div className="flex justify-between border-b-[0.30px] border-green-600 mb-[18px]">
                        <div>
                            <Link href={"/"}>
                                <Image
                                    alt="logo"
                                    width={150}
                                    height={34.3}
                                    src={"/header/logo.svg"}
                                />
                            </Link>
                        </div>
                        <HeaderLinkWrapper />
                        <div className="flex gap-[30px] pb-[17.7px]">
                            <button className="cursor-pointer">
                                <Image
                                    width={20}
                                    height={20}
                                    src="/header/search.svg"
                                    alt="search icon"
                                />
                            </button>
                            <button className="cursor-pointer">
                                <Image
                                    width={20}
                                    height={20}
                                    src="/header/cart.svg"
                                    alt="cart icon"
                                />
                            </button>
                            <button className="bg-[#46a358] text-[#fff] flex items-center text-[16px] font-bold gap-[4px] py-[8px] px-[18px] rounded-[6px] cursor-pointer">
                                <Image
                                    width={20}
                                    height={20}
                                    src={"/header/login.svg"}
                                    alt="login icon"
                                />
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
