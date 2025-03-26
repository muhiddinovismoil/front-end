import { BlogsCard } from "@/components/cards/blogs-card";
import { ProductCard } from "@/components/cards/product-card";
import { CustomRangeSlider } from "@/components/client/custom-range";
import { ProductType } from "@/components/client/product-type";
import Hero from "@/components/client/swiper";
import { allProducts, blogsData, categoriesData } from "@/data/data";
import Image from "next/image";
import Pagination from "@/components/client/pagination";
import { CategoriesList } from "@/components/client/categories-list";
import { SizeList } from "@/components/client/size-list";
// import { Сategories } from "@/components/cards/categories";

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
                            <div className=" w-[310px]">
                                {" "}
                                <div className="bg-[#fbfbfb] flex flex-col ">
                                    <div>
                                        <h2 className="pl-[18px] pt-[19px] pb-[7px] text-[18px] text-[#3d3d3d] font-bold">
                                            Categories
                                        </h2>
                                        <CategoriesList />
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
                                        <SizeList />
                                    </div>
                                </div>
                                <div className="w-[312px] h-[470px]">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={"/category.svg"}
                                        alt="category photo"
                                    />
                                </div>
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
                        <div className="text-end flex justify-end pt-[90px]">
                            <Pagination totalPages={5} />
                        </div>
                    </div>
                </section>
                <section className="pt-[94px] pb-[138px]">
                    <div className="container">
                        <div className="flex gap-[28px] relative">
                            <div className="max-w-[586px]  flex items-end pr-[30px]">
                                <Image
                                    src={"/about.svg"}
                                    alt="about image"
                                    className=""
                                    width={292}
                                    height={292}
                                />
                                <div className="flex items-end flex-col pt-[37px]  h-[250px]">
                                    <h2 className="w-[150px] text-end pb-[9px] text-[18px] cerapro-medium-font text-[#3d3d3d]">
                                        Summer Cactus & Succulents
                                    </h2>
                                    <p className="w-[292px] text-[14px] text-end text-[#727272]">
                                        We are online plant shop offering a wide
                                        range of cheap and trendy plants
                                    </p>
                                    <button className="cursor-pointer mt-[25px] pl-[28px] text-[14px] text-[#fff] rounded-[6px] pr-[27px] bg-[#42a358] pt-[11px] pb-[9px]">
                                        Find More →
                                    </button>
                                </div>
                            </div>
                            <div className="max-w-[586px]  flex items-end pr-[30px]">
                                <Image
                                    src={"/about2.svg"}
                                    alt="about image"
                                    className=""
                                    width={287}
                                    height={287}
                                />
                                <div className="flex items-end flex-col pt-[37px]  h-[250px]">
                                    <h2 className="w-[146px] text-end pb-[9px] text-[18px] cerapro-medium-font text-[#3d3d3d]">
                                        Styling Trends & Much More
                                    </h2>
                                    <p className="w-[292px] text-[14px] text-end text-[#727272]">
                                        We are online plant shop offering a wide
                                        range of cheap and trendy plants
                                    </p>
                                    <button className="cursor-pointer mt-[25px] pl-[28px] text-[14px] text-[#fff] rounded-[6px] pr-[27px] bg-[#42a358] pt-[11px] pb-[9px]">
                                        Find More →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" pb-[100px]">
                    <div className="container">
                        <div className="text-center flex flex-col gap-y-[15px] pb-[35px]">
                            <h2 className="text-[30px] leading-[53%] cerapro-bold-font text-[#3d3d3d]">
                                Our Blog Posts
                            </h2>
                            <p className="text-[14px] text-[#727272] leading-[171%]">
                                We are an online plant shop offering a wide
                                range of cheap and trendy plants.{" "}
                            </p>
                        </div>
                        <div className="flex gap-[43px]">
                            {blogsData.map((item) => {
                                return (
                                    <BlogsCard
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        date={item.date}
                                        img={item.img}
                                        description={item.description}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
