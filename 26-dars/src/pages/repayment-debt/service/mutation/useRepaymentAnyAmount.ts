import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { RepaymentByMonthI } from "../../../../types/repayment";

export const useRepaymentAnyAmount = () => {
    return useMutation({
        mutationFn: (data: RepaymentByMonthI) =>
            request.post("/payments", data).then((res) => res.data),
        onError: (err) => {
            console.log(err);
        },
    });
};
