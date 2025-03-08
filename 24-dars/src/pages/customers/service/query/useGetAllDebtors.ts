import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";
export const useGetAllDebtors = (page: number, pageSize: number) => {
    return useQuery({
        queryKey: ["debtors", page, pageSize],
        queryFn: async () => {
            const res = await request.get("/debtors", {
                params: {
                    page: page,
                    limit: pageSize,
                },
            });
            return res.data;
        },
    });
};
