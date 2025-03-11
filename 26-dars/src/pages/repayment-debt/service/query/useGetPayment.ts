import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetPayment = (id: string | undefined) => {
    return useQuery({
        queryKey: ["payments-info"],
        queryFn: () =>
            request.get(`/debt/next-payment/${id}`).then((res) => res.data),
    });
};
