import { buttons } from "./data/buttons";
import phoneIcon from "/public/phone.svg";
import heroArrowR from "/public/hero-rightarrow.svg";
import heroArrowL from "/public/hero-leftarrow.svg";
import newIcon from "/public/new.svg";
import likedIcon from "/public/liked.svg";
import {
    discountedProducts,
    newProducts,
    popularProducts,
} from "./data/mock-data";
import { Product } from "./_components/product";
export default function Home() {
    return (
        <>
            <div>
                <div className="flex container pl-[50px]]">
                    <div className="pt-[15.79px]  flex flex-col gap-[15px] items-start pr-[20px]">
                        {buttons.map((item) => {
                            return (
                                <button
                                    key={item.id}
                                    className="leading-[161%] font-normal text-[#0d1136] cursor-pointer flex justify-between w-[210px] text-[14px] items-center pb-[17.79px] pt-[15.86px]"
                                >
                                    {item.name}
                                    <img
                                        className="pr-[10px]"
                                        src={item.arrowIcon.src}
                                        alt="right arrow icon"
                                    />
                                </button>
                            );
                        })}
                    </div>
                    <div className="bg-[#f7f7f7] grow flex-col pt-[38px] pr-[51px] pl-[24px]">
                        <div className="relative bg-[#c4ead2] max-w-[1085px] rounded-[6px] pl-[107px] pr-[406px]">
                            <div className="absolute left-[27px] cursor-pointer top-[42%]">
                                <img src={heroArrowL.src} alt="hero arrow" />
                            </div>
                            <div className="pt-[43px] pb-[60.92px] max-w-[572px] flex flex-col gap-[26px]">
                                <h2 className="font-bold text-[30px] text-[#071612] spacing-[0.01em]">
                                    Yangi ro’yxatdan o’tgan mijozlarga ilk
                                    buyurtma bepul yetkazib beriladi!
                                </h2>
                                <div className="flex gap-[11px]">
                                    <img src={phoneIcon.src} alt="phone icon" />
                                    <p className="font-bold text-[16px] text-[#071612]">
                                        1833-2178
                                    </p>
                                </div>
                            </div>
                            <div className="absolute right-[16px] cursor-pointer top-[42%]">
                                <img
                                    src={heroArrowR.src}
                                    alt="heroArrowR.src"
                                />
                            </div>
                        </div>
                        <div className="pt-[28.08px]">
                            <div className="flex items-center gap-[17px]">
                                <img src={newIcon.src} alt="new icon" />
                                <h2 className="font-bold text-[32px] leading-[75%] text-[#0d1136]">
                                    Yangi
                                </h2>
                            </div>
                            <div className="grid grid-cols-4 gap-x-[11px] gap-y-[13px] mt-[36px]">
                                {newProducts.map((item) => {
                                    return (
                                        <Product
                                            key={item.id}
                                            id={item.id}
                                            img={item.img}
                                            name={item.name}
                                            price={item.price}
                                            discounted_price={
                                                item.discounted_price
                                            }
                                            badge={item.badge}
                                            halal={item.halal}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className="pt-[45px]">
                            <div className="flex items-center gap-[17px]">
                                <img src={likedIcon.src} alt="liked icon" />
                                <h2 className="font-bold text-[32px] leading-[75%] text-[#0d1136]">
                                    Ommabop mahsulotlar
                                </h2>
                            </div>
                            <div className="grid grid-cols-4 gap-x-[11px] gap-y-[13px] mt-[36px]">
                                {popularProducts.map((item) => {
                                    return (
                                        <Product
                                            key={item.id}
                                            id={item.id}
                                            img={item.img}
                                            name={item.name}
                                            price={item.price}
                                            discounted_price={
                                                item.discounted_price
                                            }
                                            badge={item.badge}
                                            halal={item.halal}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className="pt-[36px]">
                            <div className="flex items-center gap-[17px]">
                                <img src={likedIcon.src} alt="liked icon" />
                                <h2 className="font-bold text-[32px] leading-[75%] text-[#0d1136]">
                                    Chegirmadagi mahsulotlar
                                </h2>
                            </div>
                            <div className="grid grid-cols-4 gap-x-[11px] gap-y-[13px] mt-[36px]">
                                {discountedProducts.map((item) => {
                                    return (
                                        <Product
                                            key={item.id}
                                            id={item.id}
                                            img={item.img}
                                            name={item.name}
                                            price={item.price}
                                            discounted_price={
                                                item.discounted_price
                                            }
                                            badge={item.badge}
                                            halal={item.halal}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
