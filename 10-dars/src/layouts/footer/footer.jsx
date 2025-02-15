import playMarket from "../../assets/play_market.svg";
import appStore from "../../assets/app_store.svg";
// Bottom Footer
import socialNetImg from "../../assets/images/footer/footer_social.svg";
import socialNetImg2 from "../../assets/images/footer/footer_social2.svg";
import socialNetImg3 from "../../assets/images/footer/footer_social3.svg";
import socialNetImg4 from "../../assets/images/footer/footer_social4.svg";
import socialNetImg5 from "../../assets/images/footer/footer_social5.svg";
// For Payment
import paymentImg from "../../assets/images/footer/footer_payment.svg";
import paymentImg2 from "../../assets/images/footer/footer_payment2.svg";
import paymentImg3 from "../../assets/images/footer/footer_payment3.svg";
export const Footer = () => {
    return (
        <>
            <div className="bg-[var(--primary-soft)]">
                <div className="container">
                    <div className="flex pt-[31px]  pb-[63px] max-w-[1081px]">
                        <ul className="pt-[31px] mr-[137px] max-w-[210px]">
                            <li className="pb-[14px]">
                                <h2 className="text-[20px] text-[#11142d] font-bold">
                                    Платформа хақида
                                </h2>
                            </li>
                            <li className="pb-[18px]">
                                <a
                                    className="text-[18px] text-[#11142d] font-normal"
                                    href="#"
                                >
                                    Liber ўзи нима?
                                </a>
                            </li>
                            <li className="pb-[18px]">
                                <a
                                    className="text-[18px] text-[#11142d] font-normal"
                                    href="#"
                                >
                                    Фойдаланиш шартлари
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-[18px] text-[#11142d] font-normal"
                                    href="#"
                                >
                                    Ёрдам
                                </a>
                            </li>
                        </ul>
                        <ul className="pt-[31px] mr-[137px] max-w-[147px]">
                            <li className="pb-[14px]">
                                <h2 className="text-[20px] text-[#11142d] font-bold">
                                    Обуна хақида
                                </h2>
                            </li>
                            <li className="pb-[18px]">
                                <a
                                    className="text-[18px] text-[#11142d] font-normal"
                                    href="#"
                                >
                                    Обуна бўлиш
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-[18px] text-[#11142d] font-normal"
                                    href="#"
                                >
                                    Қандай тўлаш
                                </a>
                            </li>
                        </ul>
                        <ul className="pt-[31px] mr-[119px] max-w-[170px]">
                            <li className="pb-[14px]">
                                <h2 className="text-[20px] text-[#11142d] font-bold">
                                    Китоблар
                                </h2>
                            </li>
                            <li className="pb-[18px]">
                                <a
                                    className="text-[18px] text-[#11142d] font-normal"
                                    href="#"
                                >
                                    Аудио китоблар
                                </a>
                            </li>
                            <li className="pb-[18px]">
                                <a
                                    className="text-[18px] text-[#11142d] font-normal"
                                    href="#"
                                >
                                    Электрон китоблар
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-[18px] text-[#11142d] font-normal"
                                    href="#"
                                >
                                    Китоблар
                                </a>
                            </li>
                        </ul>
                        <ul className="pt-[31px]">
                            <li className="pb-[14px]">
                                <h2 className="text-[20px] text-[#11142d] font-bold">
                                    Мобил илова
                                </h2>
                            </li>
                            <li className="pb-[16.49px]">
                                <a href="https://play.google.com/store">
                                    <img src={playMarket} alt="playmarket" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.apple.com/app-store/">
                                    <img src={appStore} alt="appstore" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[var(--gray-on-dark)] pt-[12px] pb-[33.54px]">
                <div className="container">
                    <div className="flex">
                        <h2 className="text-[var(--white)] text-[14px] leading-[114%] font-light mr-[97.5px]">
                            Ижтимоий тармоқлар
                        </h2>
                        <h2 className="text-[var(--white)] mb-[11px] text-[14px] leading-[114%] font-light ml-[97.5px] mr-[149.5px]">
                            Боғланиш
                        </h2>
                        <h2 className="text-[var(--white)] text-[14px] leading-[114%] font-light ml-[149.5px]">
                            Биз қабул қиламиз
                        </h2>
                    </div>
                    <ul className="flex items-center">
                        <li>
                            <div className="flex gap-[24.50px] mr-[62px] items-center">
                                <a href="https://x.com">
                                    <img
                                        src={socialNetImg}
                                        alt="social network icon"
                                    />
                                </a>
                                <a href="https://www.facebook.com">
                                    <img
                                        src={socialNetImg2}
                                        alt="social network icon2"
                                    />
                                </a>
                                <a href="https://www.tiktok.com">
                                    <img
                                        src={socialNetImg3}
                                        alt="social network icon3"
                                    />
                                </a>
                                <a href="https://telegram.org">
                                    <img
                                        src={socialNetImg4}
                                        alt="social network icon4"
                                    />
                                </a>
                                <a href="https://www.instagram.com">
                                    <img
                                        src={socialNetImg5}
                                        alt="social network icon5"
                                    />
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="flex ml-[62px] mr-[42px] gap-[23px]">
                                <p className=" text-[16px] font-light text-[var(--white)] leading-[100%]">
                                    +998 90 253 77 53
                                </p>
                                <p className="text-[16px] font-light text-[var(--white)] leading-[100%]">
                                    support@liber.uz
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex ml-[42px]">
                                <a href="https://uzcard.uz">
                                    <img
                                        className="cursor-pointer"
                                        src={paymentImg}
                                        alt="paymet types"
                                    />
                                </a>
                                <a href="https://humocard.uz/ru">
                                    <img
                                        className="cursor-pointer"
                                        src={paymentImg2}
                                        alt="paymet types2"
                                    />
                                </a>
                                <a href="https://payme.uz">
                                    <img
                                        className="cursor-pointer"
                                        src={paymentImg3}
                                        alt="paymet types3"
                                    />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
