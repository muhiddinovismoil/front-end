import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { loadCookieState } from "../../../../config/cookie";
export const useGetAllDebtors = () => {
    return useQuery({
        queryKey: ["debtors"],
        queryFn: async () => {
            const token = loadCookieState("user_token");
            const res = await request.get("/debtors", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return res.data;
        },
    });
};
