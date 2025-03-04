import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { todoT } from "../../../../interface/todo-interface";

export const useAddTodo = () => {
    return useMutation({
        mutationFn: (data: todoT) =>
            request.post("/todo", data).then((res) => res.data),
    });
};
