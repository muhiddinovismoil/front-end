"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderLinks = () => {
    const pathname = usePathname();
    return (
        <div className="flex gap-[50px]">
            <Link
                href={"/"}
                className={
                    pathname == "/"
                        ? "border-b-3 border-b-[#46a358] cerapro-bold-font text-[#3d3d3d]"
                        : "text-[#3d3d3d]"
                }
            >
                Home
            </Link>
            <Link
                className={
                    pathname == "/shop"
                        ? "border-b-3 border-b-[#46a358] cerapro-bold-font text-[#3d3d3d]"
                        : "text-[#3d3d3d]"
                }
                href={"/shop"}
            >
                Shop
            </Link>
            <Link
                className={
                    pathname == "/plant-care"
                        ? "border-b-3 border-b-[#46a358] cerapro-bold-font text-[#3d3d3d]"
                        : "text-[#3d3d3d]"
                }
                href={"/plant-care"}
            >
                Plant Care
            </Link>
            <Link
                className={
                    pathname == "/blogs"
                        ? "border-b-3 border-b-[#46a358] cerapro-bold-font text-[#3d3d3d]"
                        : "text-[#3d3d3d]"
                }
                href={"/blogs"}
            >
                Blogs
            </Link>
        </div>
    );
};
export default HeaderLinks;
