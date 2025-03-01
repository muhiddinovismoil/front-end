import productImg from "../assets/home/product-img.svg";
import productImg2 from "../assets/home/product-img2.svg";
import productImg3 from "../assets/home/product-img3.svg";
import productImg4 from "../assets/home/product-img4.svg";
import productImg5 from "../assets/home/product-img5.svg";
import productImg6 from "../assets/home/product-img6.svg";
import productImg7 from "../assets/home/product-img7.svg";
import productImg8 from "../assets/home/product-img8.svg";
import raitingImg from "../assets/home/rating.svg";
import raitingImg2 from "../assets/home/rating2.svg";
import raitingImg3 from "../assets/home/rating3.svg";
import raitingImg4 from "../assets/home/rating4.svg";
import raitingImg5 from "../assets/home/rating5.svg";

import recomendedsRate from "../assets/product-details/recomendeds/recomended-rate.svg";
import recomendedsRate2 from "../assets/product-details/recomendeds/recomended-rate2.svg";
import recomendedsRate3 from "../assets/product-details/recomendeds/recomended-rate3.svg";
import recomendedsRate4 from "../assets/product-details/recomendeds/recomended-rate4.svg";
import recomendedPImg from "../assets/product-details/recomendeds/recomended-product.svg";
import recomendedPImg2 from "../assets/product-details/recomendeds/recomended-product2.svg";
import recomendedPImg3 from "../assets/product-details/recomendeds/recomended-product3.svg";
import recomendedPImg4 from "../assets/product-details/recomendeds/recomended-product4.svg";
export const newArrivals = [
    {
        id: "nkD3j7G5X9",
        name: "T-shirt with Tape Details",
        img: productImg,
        price: "$120",
        rating: raitingImg,
        about: "A stylish t-shirt that blends comfort and fashion. Designed with breathable fabric, making it ideal for daily wear anywhere.",
    },
    {
        id: "hV2Lm6P9Q7",
        name: "Skinny Fit Jeans",
        img: productImg2,
        price: "$240",
        old_price: "$260",
        discount: "-20%",
        rating: raitingImg2,
        about: "Slim-fit jeans that offer a modern and trendy look. Made from premium denim to provide long-lasting durability and comfort.",
    },
    {
        id: "xM9Bq4V5K2",
        name: "Checkered Shirt",
        img: productImg3,
        price: "$180",
        rating: raitingImg,
        about: "A checkered shirt that stands out for its casual yet classy design. Soft material ensures a comfortable fit for all-day wear.",
    },
    {
        id: "yR5Nq7L3X8",
        name: "Sleeve Striped T-shirt",
        img: productImg4,
        price: "$130",
        old_price: "$160",
        discount: "-30%",
        rating: raitingImg,
        about: "A cool striped t-shirt perfect for any event. Made of lightweight cotton fabric to keep you relaxed while looking stylish.",
    },
];

export const topSelling = [
    {
        id: "pD4Lm7Q9K5",
        name: "VERTICAL STRIPED SHIRT",
        img: productImg5,
        price: "$212",
        old_price: "$232",
        discount: "-20%",
        rating: raitingImg3,
        about: "A trendy striped shirt with a relaxed fit. Designed to be soft and breathable, ensuring a perfect blend of style and ease.",
    },
    {
        id: "wV6Bq3L9N2",
        name: "COURAGE GRAPHIC T-SHIRT",
        img: productImg6,
        price: "$145",
        rating: raitingImg4,
        about: "A graphic t-shirt with a bold statement. Crafted with high-quality cotton fabric, making it a must-have piece in your wardrobe.",
    },
    {
        id: "zX9Lq5N7B3",
        name: "LOOSE FIT BERMUDA SHORTS",
        img: productImg7,
        price: "$80",
        rating: raitingImg5,
        about: "Comfortable Bermuda shorts that provide a relaxed and laid-back look. Made from soft material to keep you feeling fresh all day.",
    },
    {
        id: "mQ4N7X9B5L",
        name: "FADED SKINNY JEANS",
        img: productImg8,
        price: "$210",
        rating: raitingImg,
        about: "A pair of classic faded skinny jeans that pair well with any top. Designed for a snug fit while maintaining comfort and durability.",
    },
];
export const recomendedProducts = [
    {
        id: "e33a1d75-2fee-4ccd-abd9-32274270f025",
        name: "Polo with Contrast Trims",
        rating: recomendedsRate,
        img: recomendedPImg,
        price: "$212",
        old_price: "$242",
        discount: "-20%",
    },
    {
        id: "a11c51c8-e58c-46e7-9ad5-6c9d9c44990c",
        name: "Gradient Graphic T-shirt",
        rating: recomendedsRate2,
        img: recomendedPImg2,
        price: "$145",
    },
    {
        id: "f0427036-0a45-4701-a47a-3d92e424ee94",
        name: "Polo with Tipping Details",
        rating: recomendedsRate3,
        img: recomendedPImg3,
        price: "$180",
    },
    {
        id: "9f4f2a49-5566-414e-9d6b-6de0dcaa2e2d",
        name: "Black Striped T-shirt",
        rating: recomendedsRate4,
        img: recomendedPImg4,
        price: "$120",
        old_price: "$150",
        discount: "-30%",
    },
];
export const allProducts = [
    ...newArrivals,
    ...topSelling,
    ...recomendedProducts,
];
