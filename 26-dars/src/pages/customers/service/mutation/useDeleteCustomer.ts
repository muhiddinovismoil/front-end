import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useDeleteCustomer = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string | undefined) =>
            request.delete(`/debtors/${id}`).then((res) => res.data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["debtors"] });
        },
    });
};
