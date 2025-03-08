import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { CustomerFieldType } from "../../../../types/customers.type";

export const useAddCustomer = () => {
    return useMutation({
        mutationFn: async (data: CustomerFieldType) => {
            const res = await request.post("/debtors", data);
            return res.data;
        },
        onSuccess: () => {
            console.log("Yuklandi");
        },
        onError: (err) => {
            console.error(err);
        },
    });
};
