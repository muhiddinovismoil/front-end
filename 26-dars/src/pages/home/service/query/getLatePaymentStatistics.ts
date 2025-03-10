import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useLatePaymentStatistics = () => {
    return useQuery({
        queryKey: ["latePaymentStatistics"],
        queryFn: async () => {
            const res = await request.get("/store-statistics/late-payments");
            return res.data;
        },
    });
};
