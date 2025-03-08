import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { DebtorField } from "../../../../types/debts.type";

export const useAddDebt = () => {
    return useMutation({
        mutationFn: (data: DebtorField) =>
            request.post("/debt", data).then((res) => res.data),
    });
};
