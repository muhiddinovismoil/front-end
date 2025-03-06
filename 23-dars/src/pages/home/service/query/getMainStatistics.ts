import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { loadCookieState } from "../../../../config/cookie";

export const useMainStatistics = () => {
    return useQuery({
        queryKey: ["mainStatistics"],
        queryFn: async () => {
            const token = loadCookieState("user_token");
            const res = await request.get("/store-statistics/main", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return res.data;
        },
    });
};
