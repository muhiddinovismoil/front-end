import React from "react";
import logoImg from "/public/logo.svg";
import searchIcon from "/public/search.svg";
import contactIcon from "/public/contact-icon.svg";
import walletIcon from "/public/wallet.svg";
import flagIcon from "/public/uzb-flag.svg";
import arrowIcon from "/public/arrow.svg";
import profileIcon from "/public/profile.svg";
import likeListIcon from "/public/likelist.svg";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="py-[20px] shadow-[0_4px_4px_0_rgba(0,0,0,0.03)]">
            <div className="container">
                <div className="flex items-center">
                    <div>
                        <Link href={"/"}>
                            <img src={logoImg.src} alt="logo" />
                        </Link>
                    </div>
                    <div className="border border-[#019e7f] overflow-hidden rounded-[6px] ml-[50px] max-w-[711px] grow flex">
                        <button className="pt-[15.03px] cursor-pointer pb-[16.04px] pl-[13.01px] pr-[11.01px]">
                            <img src={searchIcon.src} alt="search-icon" />
                        </button>
                        <input
                            className="pt-[5px] pb-[7px] pl-[8px] w-[655px] outline-0"
                            type="text"
                            placeholder="Qidirish"
                        />
                    </div>
                    <Link
                        href={"/contact"}
                        className="flex items-center gap-[7px] ml-[42px] mr-[35px]"
                    >
                        <div className="py-[2px]">
                            <img src={contactIcon.src} alt="contact icon" />
                        </div>
                        <p className="border-b text-[14px] font-semibold">
                            Bog’lanish
                        </p>
                    </Link>
                    <Link href={"/payments"}>
                        <button className="flex gap-[8px] border pl-[12px] pr-[13px] py-[9px] text-[13px] text-[#019e7f] font-bold rounded-[6px] border-[#019e7f] cursor-pointer mr-[31px]">
                            <img src={walletIcon.src} alt="wallet icon" />
                            Payme
                        </button>
                    </Link>
                    <button className="flex items-center cursor-pointer text-[#009e7f] text-[15px] font-normal border gap-[5px] pt-[8px] pr-[8px] pl-[12px] pb-[6px] rounded-[6px]">
                        <img
                            src={flagIcon.src}
                            alt="flag"
                            className="pr-[3px]"
                        />
                        Uz / UZS
                        <img src={arrowIcon.src} alt="arrow" />
                    </button>
                    <button className="pl-[18px]">
                        <img src={profileIcon.src} alt="profile icon" />
                    </button>
                    <Link href={"/like-lists"} className="pl-[10px]">
                        <img
                            src={likeListIcon.src}
                            className="h-[20px]"
                            alt="LikList"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
};
