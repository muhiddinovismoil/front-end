import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import Mail from "../assets/footer/mail";
import logoImg from "../assets/logo.svg";
import socialIcon from "../assets/footer/social-icon.svg";
import socialIcon2 from "../assets/footer/social-icon2.svg";
import socialIcon3 from "../assets/footer/social-icon3.svg";
import socialIcon4 from "../assets/footer/social-icon4.svg";
import paymentImg from "../assets/footer/payment-icon.svg";
import paymentImg2 from "../assets/footer/payment-icon2.svg";
import paymentImg3 from "../assets/footer/payment-icon3.svg";
import paymentImg4 from "../assets/footer/payment-icon4.svg";
import paymentImg5 from "../assets/footer/payment-icon5.svg";

export const Footer = () => {
    return (
        <>
            <div className="bg-light-grey">
                <div className="container">
                    <div className="relative pt-[160px]">
                        <div className="absolute top-[-57%] w-full flex bg-primary rounded-[20px] justify-between px-[64px] py-[36px]">
                            <div>
                                <h2 className="secondFont max-w-[551px] font-bold text-[40px] text-white">
                                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                                </h2>
                            </div>
                            <div className="flex flex-col gap-[14px]">
                                <div className="max-w-[349px] relative">
                                    <Mail className="absolute left-[17.88px] top-[16.12px]" />
                                    <input
                                        className="bg-white outline-none pt-[12px] pb-[14px] pl-[52px] w-[100%] rounded-[62px] "
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                <Button variant={"uchinchi"}>
                                    Subscribe to Newsletter
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="pb-[50px]">
                        <div className="flex gap-[113.5px]">
                            <ul className="max-w-[248px]">
                                <li className="mb-[25px]">
                                    <div>
                                        <img src={logoImg} alt="logo image" />
                                    </div>
                                </li>
                                <li className="mb-[35px]">
                                    <p className="text-[14px] font-normal leading-[157%] text-[rgba(0,0,0,0.6)]">
                                        We have clothes that suits your style
                                        and which you’re proud to wear. From
                                        women to men.
                                    </p>
                                </li>
                                <li>
                                    <div className="flex gap-[12px]">
                                        <Link to={"https://www.facebook.com/"}>
                                            <img
                                                src={socialIcon}
                                                alt="social network icon"
                                            />
                                        </Link>
                                        <Link to={"https://www.facebook.com/"}>
                                            <img
                                                src={socialIcon2}
                                                alt="social network icon"
                                            />
                                        </Link>
                                        <Link to={"https://www.instagram.com/"}>
                                            <img
                                                src={socialIcon3}
                                                alt="social network icon"
                                            />
                                        </Link>
                                        <Link to={"https://github.com/"}>
                                            <img
                                                src={socialIcon4}
                                                alt="social network icon"
                                            />
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                            <ul className="w-[104px]">
                                <li className="mb-[26px]">
                                    <h2 className="trackinng-[0.19em] font-medium uppercase leading-[112%] text-[16px]">
                                        Company
                                    </h2>
                                </li>
                                <li className="flex flex-col gap-[16px]">
                                    <p className="font-normal leading-[119%] text-[rgba(0,0,0,0.6)]">
                                        About
                                    </p>
                                    <p className="font-normal leading-[119%] text-[rgba(0,0,0,0.6)]">
                                        Features
                                    </p>
                                    <p className="font-normal leading-[119%] text-[rgba(0,0,0,0.6)]">
                                        Works
                                    </p>
                                    <p className="font-normal leading-[119%] text-[rgba(0,0,0,0.6)]">
                                        Career
                                    </p>
                                </li>
                            </ul>
                            <ul className="w-[136px]">
                                <li className="mb-[26px]">
                                    <h2 className="trackinng-[0.19em] font-medium uppercase leading-[112%] text-[16px]">
                                        Help
                                    </h2>
                                </li>
                                <li className="flex flex-col gap-[16px]">
                                    <p className="font-normal leading-[119%] text-[rgba(0,0,0,0.6)]">
                                        Customer Support
                                    </p>
                                    <p className="font-normal leading-[119%] text-[rgba(0,0,0,0.6)]">
                                        Delivery Details
                                    </p>
                                    <p className="font-normal leading-[119%] text-[rgba(0,0,0,0.6)]">
                                        Terms & Conditions
                                    </p>
                                    <p className="font-normal leading-[119%] text-[rgba(0,0,0,0.6)]">
                                        Privacy Policy
                                    </p>
                                </li>
                            </ul>
                            <ul className="w-[149px]">
                                <li className="mb-[26px]">
                                    <h2 className="trackinng-[0.19em] font-medium uppercase leading-[112%] text-[16px]">
                                        FAQ
                                    </h2>
                                </li>
                                <li className="flex flex-col gap-[16px]">
                                    <p className="font-normal leading-[119%] text-[rgba(0,0,0,0.6)]">
                                        Customer Support
                                    </p>
                                    <p className="font-normal leading-[119%] text-[rgba(0,0,0,0.6)]">
                                        Delivery Details
                                    </p>
                                    <p className="font-normal leading-[119%] text-[rgba(0,0,0,0.6)]">
                                        Terms & Conditions
                                    </p>
                                    <p className="font-normal leading-[119%] text-[rgba(0,0,0,0.6)]">
                                        Privacy Policy
                                    </p>
                                </li>
                            </ul>
                            <ul className="w-[149px]">
                                <li className="mb-[26px]">
                                    <h2 className="trackinng-[0.19em] font-medium uppercase leading-[112%] text-[16px]">
                                        Resources
                                    </h2>
                                </li>
                                <li className="flex flex-col gap-[16px]">
                                    <p className="font-normal leading-[119%] text-[rgba(0,0,0,0.6)]">
                                        Account
                                    </p>
                                    <p className="font-normal leading-[119%] text-[rgba(0,0,0,0.6)]">
                                        Manage Deliveries
                                    </p>
                                    <p className="font-normal leading-[119%] text-[rgba(0,0,0,0.6)]">
                                        Orders
                                    </p>
                                    <p className="font-normal leading-[119%] text-[rgba(0,0,0,0.6)]">
                                        Payments
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t-[2px] border-[rgba(0,0,0,0.1)] pt-[20px]">
                        <div className="flex justify-between">
                            <p className="text-[14px] text-[rgba(0,0,0,0.6)] pt-[5px] pb-[6.03px]">
                                Shop.co © 2000-2023, All Rights Reserved
                            </p>
                            <div className="flex gap-[12px]">
                                <Link to={"https://usa.visa.com/"}>
                                    <img src={paymentImg} alt="payment icons" />
                                </Link>
                                <Link to={"https://www.paypal.com/uz/home"}>
                                    <img
                                        src={paymentImg2}
                                        alt="payment icons"
                                    />
                                </Link>
                                <Link
                                    to={"https://www.mastercard.us/en-us.html"}
                                >
                                    <img
                                        src={paymentImg3}
                                        alt="payment icons"
                                    />
                                </Link>
                                <Link to={"https://www.apple.com/apple-pay/"}>
                                    <img
                                        src={paymentImg4}
                                        alt="payment icons"
                                    />
                                </Link>
                                <Link to={"https://pay.google.com/about/"}>
                                    <img
                                        src={paymentImg5}
                                        alt="payment icons"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
