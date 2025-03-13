import React from "react";
import logoIcon from "/public/logo.svg";
import playMarketIcon from "/public/footer/apps-store.svg";
import appsStoreIcon from "/public/footer/play-market.svg";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="py-[25px] pl-[86px] pr-[85px] shadow-[0_0_4px_0_rgba(0,0,0,0.06)]">
            <div className="container">
                <div className="flex gap-[144.14px]">
                    <div>
                        <div className="mb-[22px]">
                            <Link href={"/"}>
                                <img src={logoIcon.src} alt="logo icon" />
                            </Link>
                        </div>
                        <p className="text-[19px] font-medium leading-[150%]">
                            HilalMart © 2021
                        </p>
                        <p className="text-[15px] font-normal leading-[150%]">
                            Barcha huquqlar kafolatlangan
                        </p>
                        <div className="flex gap-[12.28px] mt-[16px]">
                            <Link
                                href={
                                    "https://play.google.com/store/games?hl=en&pli=1"
                                }
                            >
                                <img
                                    src={appsStoreIcon.src}
                                    alt="applications store"
                                />
                            </Link>
                            <Link href={"https://www.apple.com/app-store/"}>
                                <img
                                    src={playMarketIcon.src}
                                    alt="applications store"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <h2 className="font-medium text-[19px] text-[#0d1136]">
                            Foydali havolalar
                        </h2>
                        <div className="flex flex-col gap-[6px]">
                            <p className="font-normal text-[13px] leading-[150%] text-[#0d1136]">
                                Bosh sahifa
                            </p>
                            <p className="font-normal text-[13px] leading-[150%] text-[#0d1136]">
                                Yordam kerakmi?
                            </p>
                            <p className="font-normal text-[13px] leading-[150%] text-[#0d1136]">
                                Foydalanish shartlari
                            </p>
                            <p className="font-normal text-[13px] leading-[150%] text-[#0d1136]">
                                Maxfiylik siyosati
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[16px] ml-[5.86px]">
                        <h2 className="font-medium text-[19px] mb-[1px] text-[#0d1136]">
                            Biz haqimizda
                        </h2>
                        <div className="flex flex-col gap-[6px">
                            <p className="font-normal text-[13px] leading-[150%] text-[#0d1136]">
                                Manzil: #214, G-dong, Lotte castle, 347 Jongno,
                                Jongno-gu, Seoul, 03113, Crescent Trade ltd
                            </p>
                            <p className="font-normal text-[13px] leading-[150%] text-[#0d1136]">
                                Korxona nomi: Crescent trade llc
                            </p>
                            <p className="font-normal text-[13px] leading-[150%] text-[#0d1136]">
                                Korxona rahbari: DADAJONOV RAKHIMJON
                            </p>
                            <p className="font-normal text-[13px] leading-[150%] text-[#0d1136]">
                                Registratsiya raqami: 433-62-00377
                            </p>
                            <p className="font-normal text-[13px] leading-[150%] text-[#0d1136]">
                                Telefon raqam: 1833-2178 02-3670-6808
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
