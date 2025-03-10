import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetOneDebtorDebts = (id: string) => {
    return useQuery({
        queryKey: ["debtor_debts", id],
        queryFn: async () => {
            const res = await request.get(`/debtors/${id}`);
            return res.data;
        },
    });
};
