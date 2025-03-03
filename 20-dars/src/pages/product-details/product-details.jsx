import React from "react";
import { Link, useParams } from "react-router-dom";
import { NavItem } from "../../data/nav";
import { Button } from "../../components/ui/button";
import { Details } from "./components/details";
import { allProducts, recomendedProducts } from "../../data/products";
import { Navigation } from "./components/navigation";
import productMainImage from "../../assets/product-details/product-main.img.svg";
import productImage from "../../assets/product-details/product-image.svg";
import productImage2 from "../../assets/product-details/product-image2.svg";
import productImage3 from "../../assets/product-details/product-image3.svg";
import checkedIco from "../../assets/product-details/checked.png";
import filterIcon from "../../assets/product-details/filters.svg";
import arrow from "../../assets/product-details/arrow2.svg";
import { ProductReview } from "./components/product-review";
import { productReviewData } from "../../data/product-review";
import { ProductCard } from "../home/components/product-card";
import { useDispatch, useSelector } from "react-redux";
import { addProductList, toggleAmount } from "../../store/slice/cart-reducer";
export const ProductDetails = () => {
    const { id } = useParams();
    const [data, setData] = React.useState({});
    React.useEffect(() => {
        allProducts.map((item) => {
            if (item.id == id) {
                setData(item);
            }
        });
    }, []);
    const data2 = allProducts.find((item) => item.id == id);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(
            toggleAmount({
                id: data2.id,
                type: "increment",
                maxCount: data2.count,
            })
        );
    };
    const handleDecrement = () => {
        dispatch(toggleAmount({ id: data2.id, type: "decrement" }));
    };
    const addProductToCart = () => {
        dispatch(addProductList({ ...data }));
    };
    const { userCount } = useSelector((state) => state.cart);
    console.log();
    return (
        <>
            <section>
                <div className="container">
                    <div className="flex items-center pt-[24px] border-t border-[rgba(0,0,0,0.1)] gap-[12px]">
                        {NavItem.map((item) => {
                            return (
                                <Navigation
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    icon={item.icon}
                                    path={item.path}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="pt-[36px] pb-[80px]">
                <div className="container">
                    <div className="flex gap-[40px]">
                        <div className="flex gap-[14px]">
                            <div className="flex flex-col gap-[14px]">
                                <div>
                                    <img
                                        src={productImage}
                                        alt="product detailed image"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={productImage2}
                                        alt="product detailed image"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={productImage3}
                                        alt="product detailed image"
                                    />
                                </div>
                            </div>
                            <div>
                                <img
                                    src={productMainImage}
                                    alt="product main image"
                                />
                            </div>
                        </div>
                        <div className="max-w-[600px] flex grow">
                            <div className="flex flex-col">
                                {allProducts.map((item) =>
                                    item.id == id ? (
                                        <Details
                                            key={item.id}
                                            id={item.id}
                                            name={item.name}
                                            rating={item.rating}
                                            about={item.about}
                                            discount={item.discount}
                                            old_price={item.old_price}
                                            price={item.price}
                                        />
                                    ) : null
                                )}
                                <div className="border-t py-[20px] border-b border-[rgba(0,0,0,0.1)]">
                                    <p className="font-normal text-[rgba(0,0,0,0.6)]">
                                        Select Colors
                                    </p>
                                    <div className="relative">
                                        <div className="w-[13px] h-[9.5px]">
                                            <img
                                                src={checkedIco}
                                                alt="checked"
                                                className="absolute top-[18px] left-[6px] w-[13px] h-[9.5px] cursor-pointer"
                                            />
                                        </div>
                                        <div className="flex gap-[16px]">
                                            <button className="py-[13.5px] px-[13.5px] bg-[#4f4631] rounded-[100%] cursor-pointer"></button>
                                            <button className="py-[13.5px] px-[13.5px] bg-[#314f4a] rounded-[100%] cursor-pointer"></button>
                                            <button className="py-[13.5px] px-[13.5px] bg-[#31344f] rounded-[100%] cursor-pointer"></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-[20px] border-b border-[rgba(0,0,0,0.1)]">
                                    <div>
                                        <p className="pb-[12px] font-normal text-[rgba(0,0,0,0.6)]">
                                            Choose Size
                                        </p>
                                        <div className="flex gap-[12px]">
                                            <p className="py-[12px] px-[24px] cursor-pointer bg-[#f0f0f0] rounded-[62px]">
                                                Small
                                            </p>
                                            <p className="py-[12px] px-[24px] cursor-pointer bg-[#000] text-[#fff] rounded-[62px]">
                                                Medium
                                            </p>
                                            <p className="py-[12px] px-[24px] cursor-pointer bg-[#f0f0f0] rounded-[62px]">
                                                Large
                                            </p>
                                            <p className="py-[12px] px-[24px] cursor-pointer bg-[#f0f0f0] rounded-[62px]">
                                                X-Large
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-[20px]">
                                    <div className="flex gap-[20px]">
                                        <div className="flex gap-[38px] rounded-[62px] items-center px-[20px] py-[12px] bg-[#f0f0f0]">
                                            <button
                                                onClick={handleDecrement}
                                                className="cursor-pointer text-[20px]"
                                            >
                                                -
                                            </button>
                                            <p>{userCount}</p>
                                            <button
                                                onClick={handleIncrement}
                                                className="cursor-pointer text-[20px]"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <Button
                                            variant={"tortinchi"}
                                            onClick={addProductToCart}
                                        >
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-[64px]">
                <div className="container">
                    <div className="flex flex-col gap-[32px]">
                        <div className="max-w-[1240px] flex text-center">
                            <div className="w-[414px] pb-[24px] border-b border-[rgba(0,0,0,0.3)]">
                                <Link className="text-[20px] text-[rgba(0,0,0,0.6)] leading-[110%]">
                                    Product Details
                                </Link>
                            </div>
                            <div className="w-[414px] pb-[24px] border-b-[2px]">
                                <Link className="text-[20px] font-medium leading-[110%]">
                                    Rating & Reviews
                                </Link>
                            </div>
                            <div className="w-[414px] pb-[24px] border-b border-[rgba(0,0,0,0.3)]">
                                <Link className="text-[20px] text-[rgba(0,0,0,0.6)] leading-[110%]">
                                    FAQs
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-between pb-[24px]">
                            <div className="flex gap-[8px] items-center">
                                <h2 className="text-[24px] font-bold">
                                    All Reviews
                                </h2>
                                <p className="leading-[137%] text-[rgba(0,0,0,0.6)] pt-[14px] pb-[7px]">
                                    (451)
                                </p>
                            </div>
                            <div className="flex gap-[10px]">
                                <button className="rounded-full py-[14.63px] px-[13.88px] bg-[#f0f0f0] cursor-pointer">
                                    <img src={filterIcon} alt="filters" />
                                </button>
                                <button className="bg-[#f0f0f0] relative cursor-pointer rounded-[62px] py-[13px] pl-[20px] pr-[57px]">
                                    <img
                                        src={arrow}
                                        className="absolute right-[22.25px] top-[24.25px]"
                                        alt="arrow"
                                    />
                                    Latest
                                </button>
                                <Button variant={"beshinchi"}>
                                    Write a Review
                                </Button>
                            </div>
                        </div>
                        <div className="flex max-w-[1240px] gap-[20px]">
                            <div className="grid grid-cols-2 gap-[62px]">
                                {productReviewData.map((item) => {
                                    return (
                                        <ProductReview
                                            key={item.id}
                                            id={item.id}
                                            from={item.from}
                                            verified={item.verified}
                                            rate={item.rate}
                                            content={item.content}
                                            published={item.published}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-[36px]">
                        <Button variant={"oltinchi"}>Load More Reviews</Button>
                    </div>
                </div>
            </section>
            <section className="pb-[168px]">
                <div className="container">
                    <div className="flex flex-col items-center">
                        <h2 className="text-[48px] font-bold secondFont pb-[55px] uppercase">
                            You might also like
                        </h2>
                        <div className="grid grid-cols-4 gap-[20px]">
                            {recomendedProducts.map((item) => {
                                return (
                                    <ProductCard
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        price={item.price}
                                        old_price={item.old_price}
                                        discount={item.discount}
                                        img={item.img}
                                        rate={item.rating}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
