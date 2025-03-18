import React from "react";
import fetchWrapper from "@/service/fetcher";
import { Product } from "@/types/product.type";

interface ResponseI {
    products: Product[];
    limit: number;
    skip: number;
    total: number;
}
export default async function Home() {
    const data = await fetchWrapper<ResponseI>("/products?limit=8");
    const { products } = data;
    return (
        <div className="container">
            <h1 className="pt-[50px] text-3xl font-bold">Products</h1>
            <div className="grid grid-cols-4 py-[80px] gap-y-[15px] gap-x-[25px]">
                {products.map((item) => {
                    return (
                        <React.Fragment key={item.id}>
                            <div className="border rounded-2xl py-[8px] px-[12px]">
                                <div>
                                    <img src={item.thumbnail} alt="" />
                                </div>
                                <h2 className="text-[20px] font-medium">
                                    {item.title}
                                </h2>
                                <div className="flex justify-between">
                                    <p className="text-[16px] font-bold">
                                        {item.price}
                                    </p>
                                    <p>Discount: {item.discountPercentage}%</p>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}
