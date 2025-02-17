import axios from "axios";
const request = axios.create({ baseURL: import.meta.env.VITE_APP_URL });
request.interceptors.request.use((config) => {
    config.headers["Authorization"] =
        "Bearer asjdflkjqiefal;kjfa.asdkfjioqj3.asdfteiqIOHURqewcalsjdfkl";
    return config;
});

request.interceptors.response.use((res) => {
    if (res.status === 401) {
        console.log("forbidden");
    }
    return res;
});

export { request };
