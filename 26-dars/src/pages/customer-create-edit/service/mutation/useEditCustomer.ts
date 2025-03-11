import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { CustomerFieldType } from "../../../../types/customers.type";

export const useEditCustomer = (id: string | undefined) => {
    return useMutation({
        mutationFn: (data: CustomerFieldType) =>
            request.patch(`/debtors/${id}`, data),
    });
};
