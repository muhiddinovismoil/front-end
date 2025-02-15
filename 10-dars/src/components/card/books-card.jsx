/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import BooksCardIconBg1 from "../../assets/icons/books_card.bg.svg";
import BooksCardIconBg2 from "../../assets/icons/books_card.bg2.svg";
export const BooksCard = ({ id, img, title, category }) => {
    return (
        <div className="max-w-[239px]">
            <div>
                <img className="cursor-pointer" src={img} alt="" />
            </div>
            <div className="relative mt-[18px]">
                <h3 className="text-[#11142d] text-[20px] font-bold">
                    {title}
                </h3>
                <p className="text-[var(--primary)] text-[14px] mt-[8px]">
                    {category}
                </p>
                <div className="flex justify-between pt-[19px]">
                    <img
                        className="cursor-pointer"
                        src={BooksCardIconBg1}
                        alt="background img books"
                    />
                    <img
                        className="cursor-pointer"
                        src={BooksCardIconBg2}
                        alt="background img books"
                    />
                </div>
            </div>
        </div>
    );
};
