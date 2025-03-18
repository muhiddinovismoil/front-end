"use server";

import { cookies } from "next/headers";
import { RegisterI, LoginI } from "@/types/auth.type";
const baseUrl = process.env.AUTH_API;

export const registerUser = async (data: RegisterI) => {
    const res = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    const resData = await res.json();
    return resData;
};
export const loginUser = async (data: LoginI) => {
    const loginCookie = cookies();
    const res = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const resData = await res.json();
    (await loginCookie).set("token", resData.accessToken);
    return resData;
};
