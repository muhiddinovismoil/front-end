import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { RepaymentByMonthI } from "../../../../types/repayment";

export const useRepaymentByMonth = () => {
    return useMutation({
        mutationFn: (data: RepaymentByMonthI) =>
            request.post("/payments", data),
    });
};
