"use client";
import { ProductSliders } from "@/components/client/product-sliders";
import LoadingSpinner from "@/components/loading/loading";
import { Product } from "@/data/types/category";
import fetchWrapper from "@/service/fetcher";
import { addProductToCart } from "@/store/cart/cart.reducer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface ResponseOneProduct {
    status_code: number;
    message: string;
    data: Product;
}

const ProductSale = ({ params }: { params: Promise<{ id: string }> }) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [activeSize, setActiveSize] = useState<string | null>(null);
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const resolvedParams = await params;
                const { id } = resolvedParams;
                const { data } = await fetchWrapper<ResponseOneProduct>(
                    `/product/${id}`
                );
                setProduct(data);
            } catch (error) {
                console.error("Failed to fetch product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [params]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    const sizes = ["S", "M", "L", "XL"];

    return (
        <main>
            <section>
                <div className="container">
                    <div className="flex gap-[4px]">
                        <Link
                            href="/"
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
                                {Array(4)
                                    .fill(0)
                                    .map((_, i) => (
                                        <Image
                                            key={i}
                                            src={product.picture}
                                            alt="product image"
                                            width={100}
                                            height={100}
                                        />
                                    ))}
                            </div>
                            <div className="w-[444px] h-[444px] flex justify-center items-center">
                                <Image
                                    src={product.picture}
                                    width={404}
                                    height={404}
                                    alt="main image"
                                />
                            </div>
                        </div>
                        <div className="w-[574px]">
                            <h2 className="cerapro-bold-font text-[28px] text-[#3d3d3d]">
                                {product.title}
                            </h2>
                            <div className="flex justify-between border-b items-center pb-[11px]">
                                <p className="cerapro-bold-font text-[22px] text-[#46a358]">
                                    ${product.price}
                                </p>
                                <div className="flex items-center gap-[11px]">
                                    <img src="/rate.svg" alt="rate icon" />
                                    <p className="leading-[107%] text-[15px] text-[#3d3d3d]">
                                        {product.reviews.length} Customer Review
                                    </p>
                                </div>
                            </div>
                            <div className="pt-[15px] flex flex-col gap-[10px]">
                                <h3 className="text-[#3d3d3d] cerapro-medium-font text-[15px]">
                                    Short Description:
                                </h3>
                                <p className="leading-[171%] text-[#727272] text-[14px]">
                                    {product.summary}
                                </p>
                            </div>
                            <div className="pt-[24px]">
                                <p className="text-[#3d3d3d] cerapro-medium-font text-[15px]">
                                    Size:
                                </p>
                                <div className="flex gap-[10px] w-[142px] pt-[11px]">
                                    {sizes.map((size) => (
                                        <button
                                            key={size}
                                            className={`h-[28px] w-[28px] rounded-[100%] border text-[14px] leading-[114%] cursor-pointer ${
                                                activeSize === size
                                                    ? "text-[18px] text-[#42a358] leading-[89%] text-center cerapro-bold-font border-[#42a358]"
                                                    : "border-[#eaeaea] text-black"
                                            }`}
                                            onClick={() => setActiveSize(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-[23px] flex gap-[26px]">
                                <div className="flex items-center gap-[23px]">
                                    <button
                                        onClick={() =>
                                            setCount((prev) =>
                                                Math.max(1, prev - 1)
                                            )
                                        }
                                        className="w-[33px] cursor-pointer h-[38px] rounded-[31px] bg-[#42a358] text-lg text-[#fff]"
                                    >
                                        -
                                    </button>
                                    <p className="text-xl font-bold">{count}</p>
                                    <button
                                        onClick={() =>
                                            setCount((prev) => prev + 1)
                                        }
                                        className="w-[33px] cursor-pointer h-[38px] rounded-[31px] bg-[#42a358] text-lg text-[#fff]"
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="flex gap-[10px]">
                                    <button className="uppercase bg-[#42a358] px-[32px] pt-[11px] pb-[9px] rounded-[6px] cursor-pointer cerapro-bold-font text-[white] text-[14px] leading-[143%]">
                                        Buy NOW
                                    </button>
                                    <button
                                        className="uppercase border border-[#42a358] px-[20px] pt-[11px] pb-[9px] rounded-[6px] cursor-pointer cerapro-bold-font text-[#42a358] text-[14px] leading-[143%]"
                                        onClick={() =>
                                            dispatch(
                                                addProductToCart({
                                                    ...product,
                                                    userCount: count,
                                                    sub_size: activeSize,
                                                    userPrice:
                                                        parseFloat(
                                                            product.price
                                                        ) * count,
                                                    count: count,
                                                })
                                            )
                                        }
                                    >
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
                                    Categories:{" "}
                                    <span className="text-[#727272]">
                                        {product.category.name}
                                    </span>
                                </p>
                                <p className="text-[15px] leading-[107%] flex items-center gap-[10px] text-[#acacac]">
                                    Tags:{" "}
                                    <span className="text-[#727272]">
                                        {product.tags}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-[94px] pb-[128px]">
                <div className="container">
                    <h2 className="text-[17px] leading-[94%] text-[#42a358] cerapro-bold-font border-b pb-[12px] border-b-[#42a358]">
                        Related Products
                    </h2>
                    <ProductSliders />
                </div>
            </section>
        </main>
    );
};

export default ProductSale;
