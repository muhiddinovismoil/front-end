import React from "react";
import { Button } from "../../components/ui/button";
import { newArrivals, topSelling } from "../../data/products";
import { ProductCard } from "./components/product-card";
import BrendLogo from "../../assets/home/brend-logo.svg";
import BrendLogo2 from "../../assets/home/brend-logo2.svg";
import BrendLogo3 from "../../assets/home/brend-logo3.svg";
import BrendLogo4 from "../../assets/home/brend-logo4.svg";
import BrendLogo5 from "../../assets/home/brend-logo5.svg";
import browseImg from "../../assets/home/browse-dress/browse-img.png";
import browseImg2 from "../../assets/home/browse-dress/browse-img2.png";
import browseImg3 from "../../assets/home/browse-dress/browse-img3.png";
import browseImg4 from "../../assets/home/browse-dress/browse-img4.png";
import { CommentsCard } from "./components/comments-card";
import { Comments } from "../../data/comments";
export const Home = () => {
    return (
        <>
            <section className="heroBgImg bg-simple-grey">
                <div className="container">
                    <div className=" pt-[103px] overflow-hidden">
                        <div className="pb-[48px]">
                            <h1 className="secondFont font-bold leading-[100%] text-[64px] max-w-[577px] pb-[16px]">
                                FIND CLOTHES THAT MATCHES YOUR STYLE
                            </h1>
                            <p className="max-w-[545px] font-normal text-[16px] text-[#616060] leading-[137%] pt-[16px] pb-[16px]">
                                Browse through our diverse range of meticulously
                                crafted garments, designed to bring out your
                                individuality and cater to your sense of style.
                            </p>
                            <Button
                                variant={"birinchi"}
                                className={"pt-[16px]"}
                            >
                                Shop Now
                            </Button>
                        </div>
                        <div className="flex gap-[32px] pb-[116px]">
                            <div>
                                <h2 className="text-[40px] font-bold">200+</h2>
                                <p className="text-[16px] font-normal leading-[137%]">
                                    International Brands
                                </p>
                            </div>
                            <div className="border-l border-r pl-[32px] border-[#dad8d9] pr-[32px]">
                                <h2 className="text-[40px] font-bold">
                                    2,000+
                                </h2>
                                <p className="text-[16px] font-normal leading-[137%]">
                                    High-Quality Products
                                </p>
                            </div>
                            <div>
                                <h2 className="text-[40px] font-bold">
                                    30,000+
                                </h2>
                                <p className="text-[16px] font-normal leading-[137%]">
                                    Happy Customers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-primary">
                <div className="container">
                    <div className="flex gap-[106px] py-[42px]">
                        <div>
                            <img src={BrendLogo} alt="brends logo" />
                        </div>
                        <div>
                            <img src={BrendLogo2} alt="brends logo" />
                        </div>
                        <div>
                            <img src={BrendLogo3} alt="brends logo" />
                        </div>
                        <div>
                            <img src={BrendLogo4} alt="brends logo" />
                        </div>
                        <div>
                            <img src={BrendLogo5} alt="brends logo" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-[72px] pb-[64px]">
                <div className="container">
                    <div className="flex flex-col items-center">
                        <h2 className="text-[48px] font-bold secondFont pb-[55px]">
                            NEW ARRIVALS
                        </h2>
                        <div className="grid grid-cols-4 gap-[20px]">
                            {newArrivals.map((item) => {
                                return (
                                    <ProductCard
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        price={item.price}
                                        old_price={item.old_price}
                                        discount={item.discount}
                                        img={item.img}
                                        rate={item.rating}
                                    />
                                );
                            })}
                        </div>
                        <Button variant={"ikkinchi"} className={"mt-[36px]"}>
                            View All
                        </Button>
                    </div>
                </div>
            </section>
            <div className="container border border-gray"></div>
            <section className="pt-[64px]">
                <div className="container">
                    <div className="flex flex-col items-center">
                        <h2 className="text-[48px] font-bold secondFont pb-[55px] uppercase">
                            top selling
                        </h2>
                        <div className="grid grid-cols-4 gap-[20px]">
                            {topSelling.map((item) => {
                                return (
                                    <ProductCard
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        price={item.price}
                                        old_price={item.old_price}
                                        discount={item.discount}
                                        img={item.img}
                                        rate={item.rating}
                                    />
                                );
                            })}
                        </div>
                        <Button variant={"ikkinchi"} className={"mt-[36px]"}>
                            View All
                        </Button>
                    </div>
                </div>
            </section>
            <section className="pt-[80px]">
                <div className="container">
                    <div className="pt-[70px] pb-[76px] bg-light-grey rounded-[40px]">
                        <h2 className="text-center uppercase secondFont text-[48px] font-bold">
                            BROWSE BY dress STYLE
                        </h2>
                        <div className="grid gap-[20px] px-[64px] pt-[64px]">
                            <div className="grid grid-cols-[2fr_3.5fr] gap-[20px]">
                                <div
                                    className="h-[289px] py-[25px] px-[36px] rounded-[20px] overflow-hidden bg-cover bg-top"
                                    style={{
                                        backgroundImage: `url(${browseImg})`,
                                    }}
                                >
                                    <p className="font-bold text-[36px]">
                                        Casual
                                    </p>
                                </div>
                                <div
                                    className="h-[289px] py-[25px] px-[36px] rounded-[20px] overflow-hidden bg-cover bg-top"
                                    style={{
                                        backgroundImage: `url(${browseImg3})`,
                                    }}
                                >
                                    <p className="font-bold text-[36px]">
                                        Formal
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-[3.5fr_2fr] gap-[20px]">
                                <div
                                    className="h-[289px] py-[25px] px-[36px] rounded-[20px] overflow-hidden bg-cover bg-top"
                                    style={{
                                        backgroundImage: `url(${browseImg2})`,
                                    }}
                                >
                                    <p className="font-bold text-[36px]">
                                        Party
                                    </p>
                                </div>
                                <div
                                    className="h-[289px] py-[25px] px-[36px] rounded-[20px] overflow-hidden bg-cover bg-top"
                                    style={{
                                        backgroundImage: `url(${browseImg4})`,
                                    }}
                                >
                                    <p className="font-bold text-[36px]">Gym</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-[80px] pb-[170px]">
                <div className="container">
                    <div className="pb-[40px]">
                        <h2 className="secondFont text-[48px] font-bold">
                            OUR HAPPY CUSTOMERS
                        </h2>
                    </div>
                    <div className="grid grid-cols-3 gap-[20px]">
                        {Comments.map((item) => (
                            <CommentsCard
                                key={item.id}
                                rate={item.rate}
                                verified={item.verified}
                                from={item.from}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
