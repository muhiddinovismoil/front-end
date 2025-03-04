import { request } from "../../../../config/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTodo = () => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: async (_id: string) => {
            await request.delete(`/todo/${_id}`);
        },
        onSuccess: (_, _id) => {
            client.setQueryData(["todo-list"], (oldData: any) => {
                if (!oldData) return { data: [] };
                return {
                    ...oldData,
                    data: oldData.data.filter((todo: any) => todo._id !== _id),
                };
            });
        },
    });
};
