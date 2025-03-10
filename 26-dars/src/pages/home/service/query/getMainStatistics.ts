import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useMainStatistics = () => {
    return useQuery({
        queryKey: ["mainStatistics"],
        queryFn: async () => {
            const res = await request.get("/store-statistics/main");
            return res.data;
        },
    });
};
