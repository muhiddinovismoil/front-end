"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const Header = () => {
    const [userToken, setUserToken] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const token = Cookies.get("token");
        setUserToken(token || null);
        setIsLoaded(true);
    }, []);

    return (
        <div>
            <div className="container">
                <div className="flex items-center justify-between">
                    <Link href={"/"}>
                        <img
                            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
                            alt="Logo"
                            width="80"
                            height="50"
                        />
                    </Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/products"}>Products</Link>
                    <Link href={"/docs"}>Docs</Link>
                    <Link href={"/contact"}>Contact</Link>
                    {!isLoaded ? null : userToken ? (
                        <Link href={"/profile"}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/7915/7915522.png"
                                alt="Profile icon"
                                width="40"
                                height="25"
                            />
                        </Link>
                    ) : (
                        <Link
                            href={"/login"}
                            className="bg-blue-500 px-[14px] py-[6px] text-white rounded-2xl font-bold"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};
