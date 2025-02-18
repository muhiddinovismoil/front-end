import { allBooks } from "../../data/data2";
import { useParams } from "react-router-dom";
import btnIcon from "../../assets/btn-icons/icon1.svg";
import btnIcon2 from "../../assets/btn-icons/icon2.svg";
import btnIcon3 from "../../assets/btn-icons/icon3.svg";
import rateImg from "../../assets/rate.svg";
export const BookDetail = () => {
    const { id } = useParams();
    const [{ title, author, category, info, img, published }] = allBooks.filter(
        (item) => item.id == id
    );
    return (
        <>
            <div className="container flex gap-[24px] pt-[24px]">
                <div className="w-[400px]">
                    <img
                        className="w-[300px] h-[422px]"
                        src={img}
                        alt="book image"
                    />
                </div>
                <div className="flex w-[100%] flex-col gap-[16px] ">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-[30px]">{title}</h2>
                        <div>
                            <img src={rateImg} alt="rateimg" />
                        </div>
                    </div>
                    <p className="font-normal text-[14px] text-[var(--primary)]">
                        {category}
                    </p>
                    <div className="break-words max-w-[960px] max-h-[144px]">
                        <p className="font-normal text-[14px] leading-[171%] text-[#11142d]">
                            {info}
                        </p>
                    </div>
                    <div className="max-w-[414px] flex flex-col gap-[8px] pb-[12px]">
                        <ul className="flex justify-between w-full max-w-[600px]">
                            <li>
                                <h3 className="text-gray-400 font-normal text-sm">
                                    Муаллиф
                                </h3>
                            </li>
                            <li>
                                <h3 className="text-gray-400 font-normal text-sm">
                                    Нашриёт
                                </h3>
                            </li>
                            <li>
                                <h3 className="text-gray-400 font-normal text-sm">
                                    Йил
                                </h3>
                            </li>
                        </ul>
                        <ul className="flex justify-between w-full max-w-[600px] mt-2">
                            <li>
                                <p className="font-semibold text-lg text-[#11142d]">
                                    {author}
                                </p>
                            </li>
                            <li>
                                <p className="font-semibold text-lg text-[#11142d]">
                                    Wepress Inc.
                                </p>
                            </li>
                            <li>
                                <p className="font-semibold text-lg text-[#11142d]">
                                    {published}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="border-t-[2px] border-dashed border-gray-300 w-full flex gap-[16px] pt-[24px]">
                        <button className="flex items-center bg-[var(--primary)] rounded-[14px] px-[3.5px] py-[6px] font-medium text-[var(--white)] pr-[12px]">
                            <span className="pl-[5px] pr-[8px]">
                                <img src={btnIcon} alt="" />
                            </span>
                            Сотиб олиш - 65 000 сум
                        </button>
                        <button className="flex items-center border border-[var(--primary)] rounded-[14px] px-[3.5px] py-[6px] font-medium text-[var(--text)] pr-[12px]">
                            <span className="pl-[5px] pr-[8px]">
                                <img src={btnIcon2} alt="" />
                            </span>
                            Аудио тинглаш - 55 000 сум
                        </button>
                        <button className="flex items-center border border-[var(--primary)] rounded-[14px] px-[3.5px] py-[6px] font-medium text-[var(--text)] pr-[12px]">
                            <span className="pl-[5px] pr-[8px]">
                                <img src={btnIcon3} alt="" />
                            </span>
                            Онлайн укиш - 45 000 сум
                        </button>
                    </div>
                </div>
            </div>
            <div className="container pt-[40px] border">
                <div className="flex justify-between">
                    <div className="flex gap-[38px]">
                        <h2>Маълумотлар</h2>
                        <h2>Фикрлар</h2>
                    </div>
                    <h2>Ўхшаш китоблар</h2>
                </div>
            </div>
        </>
    );
};
