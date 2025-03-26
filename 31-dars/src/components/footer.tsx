import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="flex flex-col">
                    <div className="pt-[25px]">
                        <div className="flex justify-between bg-[#fbfbfb] pl-[23px] pb-[24px] pr-[25px] pt-[25px]">
                            <div className="max-w-[204px]">
                                <Image
                                    src={"/footer/footer-img.svg"}
                                    width={77}
                                    height={95}
                                    alt="footer images"
                                />
                                <h3 className="pt-[15px] text-[17px] text-[#3d3d3d] leading-[94%] cerapro-bold-font">
                                    Garden Care
                                </h3>
                                <p className="text-[14px] text-[#727272]">
                                    We are an online plant shop offering a wide
                                    range of cheap and trendy plants.
                                </p>
                            </div>
                            <div className="border rotate-[180deg] border-[#E9F2EB]"></div>
                            <div className="max-w-[204px]">
                                <Image
                                    src={"/footer/footer-img2.svg"}
                                    width={83}
                                    height={90}
                                    alt="footer images"
                                />
                                <h3 className="pt-[15px] text-[17px] text-[#3d3d3d] leading-[94%] cerapro-bold-font">
                                    Plant Renovation
                                </h3>
                                <p className="text-[14px] text-[#727272]">
                                    We are an online plant shop offering a wide
                                    range of cheap and trendy plants.
                                </p>
                            </div>
                            <div className="border rotate-[180deg] border-[#E9F2EB]"></div>
                            <div className="max-w-[204px]">
                                <Image
                                    src={"/footer/footer-img3.svg"}
                                    width={90}
                                    height={89}
                                    alt="footer images"
                                />
                                <h3 className="pt-[15px] text-[17px] text-[#3d3d3d] leading-[94%] cerapro-bold-font">
                                    Watering Graden
                                </h3>
                                <p className="text-[14px] text-[#727272]">
                                    We are an online plant shop offering a wide
                                    range of cheap and trendy plants.
                                </p>
                            </div>
                            <div className="max-w-[354px] flex flex-col gap-y-[18px]">
                                <h3 className="text-[18px] text-[#3d3d3d] cerapro-bold-font">
                                    Would you like to join newsletters?
                                </h3>
                                <div className="max-w-[354px]">
                                    <input
                                        className="rounded-l-[6px] w-[268px] outline-0 pl-[11px] py-[12px] shadow-[0_0_20px_0_rgba(0,0,0,0.06)]"
                                        placeholder="enter your email address..."
                                        type="text"
                                    />
                                    <button className="py-[12px] px-[26px] rounded-r-[6px] cursor-pointer text-[#fff] text-[18px] cerapro-bold-font bg-[#42a358]">
                                        Join
                                    </button>
                                </div>
                                <p className="text-[13px] text-[#727272]">
                                    We usually post offers and challenges in
                                    newsletter. We’re your online houseplant
                                    destination. We offer a wide range of
                                    houseplants and accessories shipped directly
                                    from our (green)house to yours!{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[25px] bg-[#edf6ef] pb-[19px] pl-[23px] pr-[267px]">
                        <div className="flex pl-[25px] gap-[60px] items-center">
                            <div className="flex gap-[87px]">
                                <Link href={"/"}>
                                    <Image
                                        src={"/header/logo.svg"}
                                        width={150}
                                        height={34.3}
                                        alt="icon"
                                    />
                                </Link>
                                <div className="flex items-center gap-[9px] max-w-[205px]">
                                    <Image
                                        src={"/footer/location.svg"}
                                        alt="location icon"
                                        width={20}
                                        height={20}
                                    />
                                    <p className="text-[14px] leading-[157%] text-[#3d3d3d]">
                                        70 West Buckingham Ave. Farmingdale, NY
                                        11735
                                    </p>
                                </div>
                            </div>
                            <div>
                                <ul className="flex gap-[73px] items-center">
                                    <li className="flex items-center gap-[10px]">
                                        <Image
                                            src={"/footer/mail.svg"}
                                            alt="location icon"
                                            width={20}
                                            height={20}
                                        />
                                        <p className="text-[14px] leading-[157%] text-[#3d3d3d]">
                                            contact@greenshop.com
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-[8px]">
                                        <Image
                                            src={"/footer/phone.svg"}
                                            alt="location icon"
                                            width={20}
                                            height={20}
                                        />
                                        <p className="text-[14px] leading-[157%] text-[#3d3d3d]">
                                            +88 01911 717 490
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-b-[#D7EADB] bg-[#fbfbfb] flex justify-between pt-[34px] pb-[28px] pl-[23px] pr-[155px]">
                        <div className="max-w-[100px]">
                            <h2 className="text-[18px] text-[#3d3d3d] cerapro-bold-font">
                                My Account
                            </h2>
                            <ul className="">
                                <li>
                                    <p className="text-[14px] leading-[214%] text-[#3d3d3d]">
                                        My Account
                                    </p>
                                </li>
                                <li>
                                    <p className="text-[14px] leading-[214%] text-[#3d3d3d]">
                                        Our Stores
                                    </p>
                                </li>
                                <li>
                                    <p className="text-[14px] leading-[214%] text-[#3d3d3d]">
                                        Contact us
                                    </p>
                                </li>
                                <li>
                                    <p className="text-[14px] leading-[214%] text-[#3d3d3d]">
                                        Career
                                    </p>
                                </li>
                                <li>
                                    <p className="text-[14px] leading-[214%] text-[#3d3d3d]">
                                        Specials
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="max-w-[137px]">
                            <h2 className="text-[18px] text-[#3d3d3d] cerapro-bold-font">
                                Help & Guide
                            </h2>
                            <ul>
                                <li>
                                    <p className="text-[14px] leading-[214%] text-[#3d3d3d]">
                                        Help Center
                                    </p>
                                </li>
                                <li>
                                    <p className="text-[14px] leading-[214%] text-[#3d3d3d]">
                                        How to Buy
                                    </p>
                                </li>
                                <li>
                                    <p className="text-[14px] leading-[214%] text-[#3d3d3d]">
                                        Shipping & Delivering
                                    </p>
                                </li>
                                <li>
                                    <p className="text-[14px] leading-[214%] text-[#3d3d3d]">
                                        Product Policy
                                    </p>
                                </li>
                                <li>
                                    <p className="text-[14px] leading-[214%] text-[#3d3d3d]">
                                        How to Return
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-[93px]">
                            <h2 className="text-[18px] text-[#3d3d3d] cerapro-bold-font">
                                Categories
                            </h2>
                            <ul>
                                <li>
                                    <p className="text-[14px] leading-[214%] text-[#3d3d3d]">
                                        House Plants
                                    </p>
                                </li>
                                <li>
                                    <p className="text-[14px] leading-[214%] text-[#3d3d3d]">
                                        Potter Plants
                                    </p>
                                </li>
                                <li>
                                    <p className="text-[14px] leading-[214%] text-[#3d3d3d]">
                                        Seeds
                                    </p>
                                </li>
                                <li>
                                    <p className="text-[14px] leading-[214%] text-[#3d3d3d]">
                                        Small Plants
                                    </p>
                                </li>
                                <li>
                                    <p className="text-[14px] leading-[214%] text-[#3d3d3d]">
                                        Accessories
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="max-w-[224px] flex flex-col gap-y-[33px]">
                            <div>
                                <h2 className="text-[18px] text-[#3d3d3d] cerapro-bold-font pb-[20px]">
                                    Social Media
                                </h2>
                                <div>
                                    <ul className="flex gap-[10px]">
                                        <li>
                                            <Link href={"https://facebook.com"}>
                                                <Image
                                                    src={"/footer/facebook.svg"}
                                                    width={30}
                                                    height={30}
                                                    alt="social media icons"
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={"https://instagram.com"}
                                            >
                                                <Image
                                                    src={
                                                        "/footer/instagram.svg"
                                                    }
                                                    width={30}
                                                    height={30}
                                                    alt="social media icons"
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"https://x.com"}>
                                                <Image
                                                    src={"/footer/twitter.svg"}
                                                    width={30}
                                                    height={30}
                                                    alt="social media icons"
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"https://linkedin.com"}>
                                                <Image
                                                    src={
                                                        "/footer/linkdedin.svg"
                                                    }
                                                    width={30}
                                                    height={30}
                                                    alt="social media icons"
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"https://youtube.com"}>
                                                <Image
                                                    src={"/footer/youtube.svg"}
                                                    width={30}
                                                    height={30}
                                                    alt="social media icons"
                                                />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-[13px]">
                                <h2 className="text-[18px] text-[#3d3d3d] cerapro-bold-font">
                                    We accept
                                </h2>
                                <Image
                                    src={"/footer/payments.svg"}
                                    width={224}
                                    height={26}
                                    alt="payments icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-[7px] pb-[13px]">
                    <p className="text-[14px] text-[#3d3d3d] leading-[214%]">
                        © 2021 GreenShop. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
