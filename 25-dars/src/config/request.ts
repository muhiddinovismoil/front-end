import axios from "axios";
import { loadCookieState } from "./cookie";

export const request = axios.create({
    baseURL: "http://localhost:3000/api/v1",
});

request.interceptors.request.use((config) => {
    const token = loadCookieState("user_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
