import { Counter } from "@/components/client/counter";
import { SizeButtons } from "@/components/size-button/size-buttons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductSale = () => {
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
                                    src={"/product-detail/product-img.svg"}
                                    alt="product image"
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={"/product-detail/product-img2.svg"}
                                    alt="product image"
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={"/product-detail/product-img.svg"}
                                    alt="product image"
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={"/product-detail/product-img2.svg"}
                                    alt="product image"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="w-[444px] h-[444px] flex justify-center items-center">
                                <Image
                                    src={"/product-detail/main.svg"}
                                    width={404}
                                    height={404}
                                    alt="main image"
                                />
                            </div>
                        </div>
                        <div className="w-[574px]">
                            <h2 className="cerapro-bold-font text-[28px] text-[#3d3d3d]">
                                Barberton Daisy
                            </h2>
                            <div className="flex justify-between border-b items-center pb-[11px]">
                                <p className="cerapro-bold-font text-[22px] text-[#46a358]">
                                    $119.00
                                </p>
                                <div className="flex items-center gap-[11px]">
                                    <img src="/rate.svg" alt="rate icon" />
                                    <p className="leading-[107%] text-[15px] text-[#3d3d3d]">
                                        19 Customer Review
                                    </p>
                                </div>
                            </div>
                            <div className="pt-[15px] flex flex-col gap-[10px]">
                                <h3 className="text-[#3d3d3d] cerapro-medium-font text-[15px]">
                                    Short Description:
                                </h3>
                                <p className="leading-[171%] text-[#727272] text-[14px]">
                                    The ceramic cylinder planters come with a
                                    wooden stand to help elevate your plants off
                                    the ground. The ceramic cylinder planters
                                    come with a wooden stand to help elevate
                                    your plants off the ground.{" "}
                                </p>
                            </div>
                            <div className="pt-[24px]">
                                <p className="text-[#3d3d3d] cerapro-medium-font text-[15px]">
                                    Size:
                                </p>
                                <SizeButtons />
                            </div>
                            <div>
                                <Counter />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductSale;
