import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { DebtorField } from "../../../../types/debts.type";

export const useAddDebt = () => {
    return useMutation({
        mutationFn: async (data: DebtorField) => {
            try {
                const res = await request.post("/debt", data);
                console.log(res.data);
                return res.data;
            } catch (error) {
                console.error("Error while adding debt:", error);
                throw error;
            }
        },
        onError: (err) => {
            console.log("Mutation error:", err);
        },
    });
};
