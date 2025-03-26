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
                        <div>
                            <h2>Barberton Daisy</h2>
                            <div>
                                <p>$119.00</p>
                                <div>
                                    <p>19 Customer Review</p>
                                </div>
                            </div>
                            <div>
                                <h3>Short Description:</h3>
                                <p>
                                    The ceramic cylinder planters come with a
                                    wooden stand to help elevate your plants off
                                    the ground. The ceramic cylinder planters
                                    come with a wooden stand to help elevate
                                    your plants off the ground.{" "}
                                </p>
                            </div>
                            <div>
                                <p>Size:</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductSale;
