import { BlogsI } from "./types/blogs";
import { CategoryI } from "./types/categories";
import { ProductI } from "./types/products";

export const allProducts: ProductI[] = [
    {
        id: "cb6f4a88-87e6-414c-bd41-4d1aacdccb36",
        image: "/products/product1.svg",
        price: "$119.00",
        name: "Barberton Daisy",
    },
    {
        id: "8705a1b7-be22-462b-a63b-8e98792eb3b9",
        image: "/products/product2.svg",
        price: "$169.00",
        name: "Angel Wing Begonia",
    },
    {
        id: "c1c8d1f9-83a6-4db6-8c4f-bc29c3e0c14d",
        image: "/products/product3.svg",
        discount_p: "13% OFF",
        price: "$199.00",
        discounted_price: "$229.00",
        name: "African Violet",
    },
    {
        id: "a7e07924-3f59-499c-bd8c-0dac7ad56dbb",
        image: "/products/product4.svg",
        price: "$129.00",
        name: "Beach Spider Lily",
    },
    {
        id: "ab47cc29-db33-4271-a023-5cc42d714a62",
        image: "/products/product5.svg",
        price: "$139.00",
        name: "Blushing Bromeliad",
    },
    {
        id: "eae2ef2d-4563-4895-8067-45ff14102cac",
        image: "/products/product6.svg",
        price: "$179.00",
        name: "Aluminum Plant",
    },
    {
        id: "741ce90e-93c4-428d-9799-cbf0b9877aa8",
        image: "/products/product7.svg",
        price: "$99.00",
        name: "Bird's Nest Fern",
    },
    {
        id: "09c639d8-5a82-44a4-a9e9-806635ec0fce",
        image: "/products/product8.svg",
        price: "$59.00",
        name: "Broadleaf Lady Palm",
    },
    {
        id: "0e60202b-1873-4c47-81cb-2d53d5a05ee1",
        image: "/products/product9.svg",
        price: "$39.00",
        name: "Chinese Evergreen",
    },
];
export const blogsData: BlogsI[] = [
    {
        id: "c214223d-5835-4b4d-af38-8a5aee5101ba",
        date: "September 12  I Read in 6 minutes",
        img: "/blogpost-section/blog.png",
        title: "Cactus & Succulent Care Tips",
        description:
            "Cacti are succulents are easy care plants for any home or patio. ",
    },
    {
        id: "24a0d474-a9b0-424d-bb57-c9f604cd7040",
        date: "September 13  I Read in 2 minutes",
        img: "/blogpost-section/blog2.png",
        title: "Top 10 Succulents for Your Home",
        description: "Best in hanging baskets. Prefers medium to high light.",
    },
    {
        id: "be795f98-ed3f-4beb-8416-667478703e48",
        date: "September 15  I Read in 3 minutes",
        img: "/blogpost-section/blog3.png",
        title: "Cacti & Succulent Care Tips",
        description:
            "Cacti and succulents thrive in containers and because most are..",
    },
    {
        id: "bca02a39-889c-4afb-9740-fbb5d7558f36",
        date: "September 15  I Read in 2 minutes",
        img: "/blogpost-section/blog4.png",
        title: "Best Houseplants Room by Room",
        description:
            "The benefits of houseplants are endless. In addition to..",
    },
];
export const categoriesData: CategoryI[] = [
    {
        id: "044a68d0-6751-4586-8b6c-0ca724e62b0f",
        name: "House Plants",
        count: 33,
    },
    {
        id: "9a20b67c-c0a7-47f7-940f-03d27e52ab03",
        name: "Potter Plants",
        count: 12,
    },
    {
        id: "9c3bb93d-c9b8-41e3-8a37-1f124435247f",
        name: "Seeds",
        count: 65,
    },
    {
        id: "c3d489a5-9ab9-4784-9ab2-63c03006f0e4",
        name: "Small Plants",
        count: 39,
    },
    {
        id: "4128b67c-417c-425d-a387-15049512ffec",
        name: "Big Plants",
        count: 23,
    },
    {
        id: "25caa758-01b1-4a90-963d-0ca590ca6347",
        name: "Succulents",
        count: 17,
    },
    {
        id: "d82e3181-aead-45d8-9dcc-6eeeac34e5d3",
        name: "Trerrariums",
        count: 19,
    },
    {
        id: "f115020c-a8cc-4c9a-82cd-e3de19f5aa4c",
        name: "Gardening",
        count: 13,
    },
    {
        id: "06736760-e459-4c2f-9b01-9a7ab1d34d11",
        name: "Accessories",
        count: 18,
    },
];
export const sizeData = [
    {
        id: "61382f12-95e3-49c1-8fb4-812f2bdfff53",
        name: "Small",
        count: 119,
    },
    {
        id: "696c58c4-0224-4a2f-9225-867d5eb2717e",
        name: "Medium",
        count: 86,
    },
    {
        id: "5f48244b-5b12-49cd-bdca-49cd74f510e9",
        name: "Large",
        count: 78,
    },
];
