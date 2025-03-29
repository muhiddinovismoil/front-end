"use client";
import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProducts } from "@/service/query/getProduct";
import LoadingSpinner from "../loading/loading";
import { ProductCard } from "../cards/product-card";
import "swiper/css";
import "swiper/css/pagination";

export const ProductSliders = () => {
    const { data, isLoading } = getProducts({ limit: 15, page: 1, query: {} });
    return (
        <Swiper
            slidesPerView={5}
            spaceBetween={0}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            className="mySwiper custom-swiper h-[370px]"
        >
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                data?.data.products?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ProductCard
                            id={item.id}
                            image={item.picture}
                            name={item.title}
                            price={item.price}
                        />
                    </SwiperSlide>
                ))
            )}
        </Swiper>
    );
};
