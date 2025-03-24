"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Hero() {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <HeroSwiper />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroSwiper />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroSwiper />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export const HeroSwiper = () => {
    return (
        <div className="flex justify-between bg-[linear-gradient(135deg,_rgba(245,_245,_245,_0.5)_0%,_rgba(245,_245,_245,_0.5)_100%)]">
            <div className="pl-[40px] pt-[62px] pb-[91px]">
                <div className="max-w-[560px] mb-[22px] flex flex-col gap-[5px]">
                    <h2 className="pb-[2px] cerapro-black-font text-[14px] leading-[114%] uppercase spacing-[0.1em] text-[#3d3d3d]">
                        Welcome to GreenShop
                    </h2>
                    <h3 className="cerapro-medium-font uppercase text-[70px] text-[#3d3d3d] leading-[100%]">
                        Let’s Make a Better{" "}
                        <span className="text-[#46a358]">Planet</span>
                    </h3>
                    <p className="text-[14px] leading-[171%] text-[#727272]">
                        We are an online plant shop offering a wide range of
                        cheap and trendy plants. Use our plants to create an
                        unique Urban Jungle. Order your favorite plants
                    </p>
                </div>
                <button className="mt-[22px] pt-[11px] pb-[9px] pl-[26px] pr-[27px] cursor-pointer bg-[#46a358] text-[#fff] rounded-[6px] cerapro-bold-font">
                    SHOP NOW
                </button>
            </div>
            <div className="">
                <Image
                    src={"/main.png"}
                    width={518}
                    height={482}
                    alt={"main-image"}
                />
            </div>
        </div>
    );
};
