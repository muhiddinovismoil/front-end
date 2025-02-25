import axios from "axios";
import { loadState } from "./storage";

export const request = axios.create({
    baseURL: import.meta.env.VITE_URI,
});
request.interceptors.request.use((config) => {
    config.headers["Authorization"] = `Bearer ${
        loadState("user")?.accessToken
    }`;
    return config;
});
