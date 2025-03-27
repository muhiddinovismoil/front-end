import Image from "next/image";
import { blogsData } from "@/data/data";
import fetchWrapper from "@/service/fetcher";
import Hero from "@/components/client/swiper";
import Pagination from "@/components/client/pagination";
import { BlogsCard } from "@/components/cards/blogs-card";
import { CategoryResponse } from "@/data/types/category";
import ProductWrappers from "@/components/wrapper/product-wrapper";
import { Filter } from "@/components/filter/filter";

export default async function Home() {
    const items = await fetchWrapper<CategoryResponse>("/category", {
        method: "GET",
    });
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
                            <ProductWrappers />
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
