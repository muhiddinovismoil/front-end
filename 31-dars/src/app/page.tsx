import { ProductCard } from "@/components/cards/product-card";
import { CustomRangeSlider } from "@/components/client/custom-range";
import { ProductType } from "@/components/client/product-type";
import Hero from "@/components/client/swiper";
import { allProducts } from "@/data/data";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <Hero />
                    </div>
                </section>
                <section className="pt-[40px]">
                    <div className="container">
                        <div className="flex gap-[50px]">
                            <div className="relative bg-[#fbfbfb] flex flex-col grow w-[310px]">
                                <div>
                                    <h2 className="pl-[18px] pt-[19px] pb-[7px] text-[18px] text-[#3d3d3d] font-bold">
                                        Categories
                                    </h2>
                                    <ul className="flex flex-col justify-between h-[360px] pl-[30px] pr-[24px]">
                                        <li className="flex justify-between">
                                            <p className="cursor-pointer leading-[267%] cerapro-bold-font text-[15px] text-[#42a358]">
                                                House Plants
                                            </p>
                                            <p className="leading-[267%] cerapro-bold-font text-[15px] text-[#42a358]">
                                                (33)
                                            </p>
                                        </li>
                                        <li className="flex justify-between">
                                            <p className="cursor-pointer leading-[267%] text-[15px]">
                                                Potter Plants
                                            </p>
                                            <p className="leading-[267%] text-[15px]">
                                                (12)
                                            </p>
                                        </li>
                                        <li className="flex justify-between">
                                            <p className="cursor-pointer leading-[267%] text-[15px]">
                                                Seeds
                                            </p>
                                            <p className="leading-[267%] text-[15px]">
                                                (65)
                                            </p>
                                        </li>
                                        <li className="flex justify-between">
                                            <p className="cursor-pointer leading-[267%] text-[15px]">
                                                Small Plants
                                            </p>
                                            <p className="leading-[267%] text-[15px]">
                                                (39)
                                            </p>
                                        </li>
                                        <li className="flex justify-between">
                                            <p className="cursor-pointer leading-[267%] text-[15px]">
                                                Big Plants
                                            </p>
                                            <p className="leading-[267%] text-[15px]">
                                                (23)
                                            </p>
                                        </li>
                                        <li className="flex justify-between">
                                            <p className="cursor-pointer leading-[267%] text-[15px]">
                                                Succulents
                                            </p>
                                            <p className="leading-[267%] text-[15px]">
                                                (17)
                                            </p>
                                        </li>
                                        <li className="flex justify-between">
                                            <p className="cursor-pointer leading-[267%] text-[15px]">
                                                Trerrariums
                                            </p>
                                            <p className="leading-[267%] text-[15px]">
                                                (19)
                                            </p>
                                        </li>
                                        <li className="flex justify-between">
                                            <p className="cursor-pointer leading-[267%] text-[15px]">
                                                Gardening
                                            </p>
                                            <p className="leading-[267%] text-[15px]">
                                                (13)
                                            </p>
                                        </li>
                                        <li className="flex justify-between">
                                            <p className="cursor-pointer leading-[267%] text-[15px]">
                                                Accessories
                                            </p>
                                            <p className="leading-[267%] text-[15px]">
                                                (18)
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pr-[60px] pt-[36px]">
                                    <h2 className="pl-[18px] text-[18px] text-[#3d3d3d] font-bold">
                                        Price Range
                                    </h2>
                                    <div className="pl-[30px] pt-[20px] w-[214px] flex flex-col gap-[16px]">
                                        <CustomRangeSlider />
                                        <p>
                                            Price:{" "}
                                            <span className="cerapro-bold-font text-[#42a358]">
                                                $39 - $1230
                                            </span>
                                        </p>
                                        <button className="cursor-pointer border cerapro-bold-font text-[#fff] leading-[125%] bg-[#42a358] rounded-[6px] w-[90px] py-[8px]">
                                            Filter
                                        </button>
                                    </div>
                                </div>
                                <div className="pt-[46px] pb-[5px]">
                                    <h2 className="pl-[18px] pb-[7px] text-[18px] text-[#3d3d3d] font-bold">
                                        Size
                                    </h2>
                                    <ul className="pl-[30px] pr-[24px]">
                                        <li className="flex justify-between">
                                            <p className="leading-[267%] text-[15px] text-[#3d3d3d]">
                                                Small
                                            </p>
                                            <p className="leading-[267%] text-[15px] text-[#3d3d3d]">
                                                (119)
                                            </p>
                                        </li>
                                        <li className="flex justify-between">
                                            <p className="leading-[267%] text-[15px] text-[#3d3d3d]">
                                                Medium
                                            </p>
                                            <p className="leading-[267%] text-[15px] text-[#3d3d3d]">
                                                (86)
                                            </p>
                                        </li>
                                        <li className="flex justify-between">
                                            <p className="leading-[267%] text-[15px] text-[#3d3d3d]">
                                                Large
                                            </p>
                                            <p className="leading-[267%] text-[15px] text-[#3d3d3d]">
                                                (78)
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className="w-[370px] h-[470px] border relative flex justify-center items-center overflow-hidden"> */}
                                <Image
                                    src="/category.svg"
                                    width={370}
                                    height={470}
                                    alt="category image"
                                    className="absolute bottom-0 object-cover"
                                />
                                {/* </div> */}
                            </div>
                            <div className="w-[100%]">
                                <div className="flex pb-[31px] justify-between">
                                    <ProductType />
                                    <div className="flex items-center gap-[5px]">
                                        <p className="text-[15px]">Short by:</p>
                                        <select
                                            name="sort"
                                            id="sort"
                                            className="outline-0"
                                        >
                                            <option
                                                className="text-[15px]"
                                                value="default"
                                            >
                                                Default sorting
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-x-[80px] gap-y-[70px]">
                                    {allProducts.map((item) => {
                                        return (
                                            <ProductCard
                                                key={item.id}
                                                id={item.id}
                                                name={item.name}
                                                price={item.price}
                                                image={item.image}
                                                discount_p={item.discount_p}
                                                discounted_price={
                                                    item.discounted_price
                                                }
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
