import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { loadCookieState } from "../../../../config/cookie";

export const useLatePaymentStatistics = () => {
    return useQuery({
        queryKey: ["latePaymentStatistics"],
        queryFn: async () => {
            const token = loadCookieState("user_token");
            const res = await request.get("/store-statistics/late-payments", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return res.data;
        },
    });
};
