import axios from "axios";

export const request = axios.create({
    baseURL: "http://3.70.159.152:3000/api/v1",
});
