import React from "react";
import { NavItem2 } from "../../data/nav";
import { Navigation } from "../product-details/components/navigation";
import { Button } from "../../components/ui/button";
import PromoIcon from "../../assets/cart/promo-icon";
import ArrowIcon from "../../assets/cart/arrow-icon";
import { CartItems } from "./components/cart-items";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, toggleAmount } from "../../store/slice/cart-reducer";

export const Cart = () => {
    const { totalPrice, subTotalPrice, deliveryFee, discount, products } =
        useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const deleteItem = (id) => {
        dispatch(deleteProduct({ id }));
    };
    return (
        <>
            <section>
                <div className="container">
                    <div className="flex gap-[16px]">
                        {NavItem2.map((item) => {
                            return (
                                <Navigation
                                    key={item.id}
                                    id={item.id}
                                    icon={item.icon}
                                    path={item.path}
                                    title={item.title}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="pt-[24px] pb-[170px]">
                <div className="container">
                    <h2 className="secondFont font-bold text-[40px] uppercase">
                        Your cart
                    </h2>
                    <div className="flex gap-[20px] pt-[24px]">
                        <div className="max-w-[715px] flex flex-col grow border border-[rgba(0,0,0,0.1)] px-[23px] py-[20px] rounded-[20px]">
                            {products.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`relative ${
                                        index !== products.length - 1
                                            ? "flex gap-[16px] max-h-[124px] max-w-[667px] grow relative-border mb-[30px] pb-[24px]"
                                            : "flex gap-[16px] max-h-[124px] max-w-[667px] grow"
                                    }`}
                                >
                                    <CartItems
                                        userCount={item.userCount}
                                        key={item.id}
                                        data={item}
                                        onRemove={() => deleteItem(item.id)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-[24px] border max-h-[470px] grow max-w-[505px] pt-[20px] pb-[33px] px-[24px] rounded-[20px] border-[rgba(0,0,0,0.1)]">
                            <h3 className="text-[24px] font-bold">
                                Order Summary
                            </h3>
                            <div>
                                <ul className="flex flex-col gap-[20px] pb-[20px] border-b border-[rgba(0,0,0,0.1)]">
                                    <li className="flex justify-between items-center">
                                        <p className="font-normal text-[20px] text-[rgba(0,0,0,0.6)]">
                                            Subtotal
                                        </p>
                                        <p className="font-bold text-[20px]">
                                            ${subTotalPrice}
                                        </p>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <p className="font-normal text-[20px] text-[rgba(0,0,0,0.6)]">
                                            Discount (-20%)
                                        </p>
                                        <p className="text-red-500 text-[20px] font-bold">
                                            -${discount}
                                        </p>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <p className="font-normal text-[20px] text-[rgba(0,0,0,0.6)]">
                                            Delivery Fee
                                        </p>
                                        <p className="font-bold text-[20px]">
                                            ${deliveryFee}
                                        </p>
                                    </li>
                                </ul>
                                <ul className="mt-[20px]">
                                    <li className="flex justify-between items-center">
                                        <p className="text-[20px]">Total</p>
                                        <p className="text-[24px] font-bold">
                                            ${totalPrice}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex gap max-w-[457px] gap-[12px]">
                                <div className="relative">
                                    <input
                                        className="pl-[57px] pt-[12px] pb-[14px] w-[326px] rounded-[62px] outline-0 bg-[#f0f0f0]"
                                        placeholder="Add promo code"
                                        type="text"
                                    />
                                    <PromoIcon
                                        className={
                                            "absolute left-[18.62px] top-[14.62px]"
                                        }
                                    />
                                </div>
                                <Button variant={"yettinchi"}>Apply</Button>
                            </div>
                            <Button
                                variant={"sakkiz"}
                                className={"flex relative mb-[33px]"}
                            >
                                Go to Checkout
                                <ArrowIcon
                                    className={
                                        "absolute right-[156.12px] top-[22.12px]"
                                    }
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
