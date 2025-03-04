import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { TodoResponse } from "../../../../interface/todo-interface";

export const useGetAllTodo = () => {
    return useQuery<TodoResponse>({
        queryKey: ["todo-list"],
        queryFn: async () => {
            const res = await request.get<TodoResponse>("/todos");
            return res.data;
        },
        retry: 2,
        staleTime: 5000,
    });
};
