import Link from "next/link";
import React from "react";

const Cart = () => {
    return (
        <main>
            <section>
                <div className="container">
                    <div className="flex">
                        <Link href={"/"} className="cerapro-bold-font">
                            Home
                        </Link>
                        <Link href={"/shop"}>/ Shop</Link>
                        <p>/ Shopping Cart</p>
                    </div>
                    <div className="flex justify-between pt-[43px]">
                        <div className="w-[782px]">
                            <div className="flex">
                                <p>Products</p>
                                <p>Price</p>
                                <p>Quantity</p>
                                <p>Total</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-[332px]">
                            <h2 className="pb-[11px] pt-[13px] text-[#3d3d3d] border-b border-b-[#A2D0AB] text-[18px] cerapro-bold-font leading-[89%]">
                                Cart Totals
                            </h2>
                            <div>
                                <p className="text-[14px] text-[#3d3d3d] leading-[114%] pt-[11px]">
                                    Coupon Apply
                                </p>
                                <div className="flex pt-[8px]">
                                    <input
                                        type="text"
                                        placeholder="Enter coupon code here..."
                                        className="outline-0 text-[14px] border-[#42a358] w-[230px] border pl-[9px] py-[12px] rounded-l-[3px]"
                                    />
                                    <button className="py-[12px] bg-[#42a358] pl-[35px] pr-[25px] rounded-r-[3px] cerapro-bold-font cursor-pointer text-[#fff]">
                                        Apply
                                    </button>
                                </div>
                                <div className="pt-[30px]">
                                    <ul className="flex flex-col gap-[15px]">
                                        <li className="flex justify-between">
                                            <p className="text-[15px] leading-[107%] text-[#3d3d3d]">
                                                Subtotal
                                            </p>
                                            <p className="text-[18px] leading-[89%] text-[#3d3d3d] cerapro-bold-font">
                                                200
                                            </p>
                                        </li>
                                        <li className="flex justify-between">
                                            <p className="text-[15px] leading-[107%] text-[#3d3d3d]">
                                                Coupon Discount
                                            </p>
                                            <p className="text-[15px]">300</p>
                                        </li>
                                        <li className="flex justify-between pt-[6px]">
                                            <p className="text-[15px] leading-[107%] text-[#3d3d3d]">
                                                Shiping
                                            </p>
                                            <p className="text-[18px] leading-[89%] text-[#3d3d3d] cerapro-bold-font">
                                                400
                                            </p>
                                        </li>
                                    </ul>
                                    <p className="text-end text-[12px] pt-[8px] text-[#42a358] cursor-pointer leading-[133%]">
                                        View shipping charge
                                    </p>
                                </div>
                                <div className="flex justify-between pb-[29px] pt-[26px]">
                                    <p className="cerapro-bold-font">Total</p>
                                    <p className="text-[18px] text-[#42a358] cerapro-bold-font">
                                        1234132
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <button className="py-[12px] pl-[91px] pr-[89px] text-[15px] cerapro-bold-font bg-[#42a358] text-[#fff] rounded-[3px]">
                                        Proceed To Checkout
                                    </button>
                                    <button className="mt-[2px] py-[12px] pl-[104px] pr-[93px] text-[15px] text-[#42a358]">
                                        Continue Shopping
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Cart;
