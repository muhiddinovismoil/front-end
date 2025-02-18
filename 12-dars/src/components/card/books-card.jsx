/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import BooksCardIconBg1 from "../../assets/icons/books_card.bg.svg";
import BooksCardIconBg2 from "../../assets/icons/books_card.bg2.svg";
export const BooksCard = ({ id, img, title, category }) => {
    return (
        <div className="max-w-[239px]">
            <div>
                <Link to={`/book-detail/${id}`}>
                    <img className="cursor-pointer" src={img} alt="" />
                </Link>
            </div>
            <div className="relative mt-[18px]">
                <Link to={`/book-detail/${id}`}>
                    <h3 className="text-[#11142d] text-[20px] font-bold">
                        {title}
                    </h3>
                </Link>
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
