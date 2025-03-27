import { Counter } from "@/components/client/counter";
import { SizeButtons } from "@/components/size-button/size-buttons";
import { Product } from "@/data/types/category";
import fetchWrapper from "@/service/fetcher";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ResponseOneProduct {
    status_code: number;
    message: string;
    data: Product;
}
const ProductSale = async ({ params }: { params: { id: string } }) => {
    const id = await params.id;
    const { data } = await fetchWrapper<ResponseOneProduct>(`/product/${id}`);
    return (
        <main>
            <section>
                <div className="container">
                    <div className="flex gap-[4px]">
                        <Link
                            href={"/"}
                            className="text-[#3d3d3d] cerapro-bold-font"
                        >
                            Home
                        </Link>
                        <p>/</p>
                        <p>Shop</p>
                    </div>
                </div>
            </section>
            <section className="pt-[43px]">
                <div className="container">
                    <div className="flex gap-[52px]">
                        <div className="flex gap-[29px]">
                            <div className="flex flex-col gap-y-[16px]">
                                <Image
                                    src={data.picture}
                                    alt="product image"
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={data.picture}
                                    alt="product image"
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={data.picture}
                                    alt="product image"
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={data.picture}
                                    alt="product image"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="w-[444px] h-[444px] flex justify-center items-center">
                                <Image
                                    src={data.picture}
                                    width={404}
                                    height={404}
                                    alt="main image"
                                />
                            </div>
                        </div>
                        <div className="w-[574px]">
                            <h2 className="cerapro-bold-font text-[28px] text-[#3d3d3d]">
                                {data.title}
                            </h2>
                            <div className="flex justify-between border-b items-center pb-[11px]">
                                <p className="cerapro-bold-font text-[22px] text-[#46a358]">
                                    ${data.price}
                                </p>
                                <div className="flex items-center gap-[11px]">
                                    <img src="/rate.svg" alt="rate icon" />
                                    <p className="leading-[107%] text-[15px] text-[#3d3d3d]">
                                        {data.reviews.length} Customer Review
                                    </p>
                                </div>
                            </div>
                            <div className="pt-[15px] flex flex-col gap-[10px]">
                                <h3 className="text-[#3d3d3d] cerapro-medium-font text-[15px]">
                                    Short Description:
                                </h3>
                                <p className="leading-[171%] text-[#727272] text-[14px]">
                                    {data.summary}
                                </p>
                            </div>
                            <div className="pt-[24px]">
                                <p className="text-[#3d3d3d] cerapro-medium-font text-[15px]">
                                    Size:
                                </p>
                                <SizeButtons />
                            </div>
                            <div className="pt-[23px] flex gap-[26px]">
                                <Counter />
                                <div className="flex gap-[10px]">
                                    <button className="uppercase bg-[#42a358] px-[32px] pt-[11px] pb-[9px] rounded-[6px] cursor-pointer cerapro-bold-font text-[white] text-[14px] leading-[143%]">
                                        Buy NOW
                                    </button>
                                    <button className="uppercase border border-[#42a358] px-[20px] pt-[11px] pb-[9px] rounded-[6px] cursor-pointer cerapro-bold-font text-[#42a358] text-[14px] leading-[143%]">
                                        Add to cart
                                    </button>
                                    <button className="flex items-center justify-center w-[40px] rounded-[6px] border cursor-pointer border-[#42a358] h-[40px]">
                                        <img
                                            src="/like-icon.svg"
                                            alt="like icon"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="pt-[20px] flex flex-col gap-y-[5px]">
                                <p className="text-[15px] leading-[107%] flex items-center gap-[10px] text-[#a5a5a5]">
                                    SKU:{" "}
                                    <span className="text-[#727272]">
                                        1995751877966
                                    </span>
                                </p>
                                <p className="text-[15px] leading-[107%] flex items-center gap-[10px] text-[#acacac]">
                                    Categories:
                                    <span className="text-[#727272]">
                                        {data.category.name}
                                    </span>
                                </p>
                                <p className="text-[15px] leading-[107%] flex items-center gap-[10px] text-[#acacac]">
                                    Tags:{" "}
                                    <span className="text-[#727272]">
                                        {data.tags}
                                    </span>
                                </p>
                            </div>
                            <div className="pt-[5px]">
                                <p className="text-[15px] text-[#3d3d3d] font-medium leading-[107%] cerapro-medium-font">
                                    Share this products:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductSale;
