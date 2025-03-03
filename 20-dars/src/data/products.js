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
        price: 120,
        rating: raitingImg,
        about: "A stylish t-shirt that blends comfort and fashion.",
        count: 15,
        size: "Medium",
        color: "Black",
    },
    {
        id: "hV2Lm6P9Q7",
        name: "Skinny Fit Jeans",
        img: productImg2,
        price: 240,
        old_price: 260,
        discount: 20,
        rating: raitingImg2,
        about: "Slim-fit jeans with a modern look.",
        count: 8,
        size: "X-Large",
        color: "Blue",
    },
    {
        id: "xM9Bq4V5K2",
        name: "Checkered Shirt",
        img: productImg3,
        price: 180,
        rating: raitingImg,
        about: "A checkered shirt with a casual yet classy design.",
        count: 12,
        size: "Large",
        color: "Red",
    },
    {
        id: "yR5Nq7L3X8",
        name: "Sleeve Striped T-shirt",
        img: productImg4,
        price: 130,
        old_price: 160,
        discount: 30,
        rating: raitingImg,
        about: "A cool striped t-shirt perfect for any event.",
        count: 10,
        size: "Small",
        color: "White",
    },
];

export const topSelling = [
    {
        id: "pD4Lm7Q9K5",
        name: "VERTICAL STRIPED SHIRT",
        img: productImg5,
        price: 212,
        old_price: 232,
        discount: 20,
        rating: raitingImg3,
        about: "A trendy striped shirt with a relaxed fit.",
        count: 20,
        size: "Medium",
        color: "White",
    },
    {
        id: "wV6Bq3L9N2",
        name: "COURAGE GRAPHIC T-SHIRT",
        img: productImg6,
        price: 145,
        rating: raitingImg4,
        about: "A graphic t-shirt with a bold statement.",
        count: 25,
        size: "Large",
        color: "Black",
    },
    {
        id: "zX9Lq5N7B3",
        name: "LOOSE FIT BERMUDA SHORTS",
        img: productImg7,
        price: 80,
        rating: raitingImg5,
        about: "Comfortable Bermuda shorts for a relaxed look.",
        count: 18,
        size: "Medium",
        color: "Khaki",
    },
    {
        id: "mQ4N7X9B5L",
        name: "FADED SKINNY JEANS",
        img: productImg8,
        price: 210,
        rating: raitingImg,
        about: "A pair of classic faded skinny jeans.",
        count: 14,
        size: "Small",
        color: "Gray",
    },
];

export const recomendedProducts = [
    {
        id: "e33a1d75-2fee-4ccd-abd9-32274270f025",
        name: "Polo with Contrast Trims",
        rating: recomendedsRate,
        img: recomendedPImg,
        price: 212,
        old_price: 242,
        discount: 20,
        count: 30,
        size: "Medium",
        color: "Blue",
    },
    {
        id: "a11c51c8-e58c-46e7-9ad5-6c9d9c44990c",
        name: "Gradient Graphic T-shirt",
        rating: recomendedsRate2,
        img: recomendedPImg2,
        price: 145,
        count: 22,
        size: "Large",
        color: "Black",
    },
    {
        id: "f0427036-0a45-4701-a47a-3d92e424ee94",
        name: "Polo with Tipping Details",
        rating: recomendedsRate3,
        img: recomendedPImg3,
        price: 180,
        count: 17,
        size: "Medium",
        color: "White",
    },
    {
        id: "9f4f2a49-5566-414e-9d6b-6de0dcaa2e2d",
        name: "Black Striped T-shirt",
        rating: recomendedsRate4,
        img: recomendedPImg4,
        price: 120,
        old_price: 150,
        discount: 30,
        count: 19,
        size: "X-Large",
        color: "Black",
    },
];

export const allProducts = [
    ...newArrivals,
    ...topSelling,
    ...recomendedProducts,
];
