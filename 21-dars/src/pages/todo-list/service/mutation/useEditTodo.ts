import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { todoT } from "../../../../interface/todo-interface";

type EditTodoArgs = { _id: string; data: Omit<todoT, "_id"> };

export const useEditTodo = () => {
    return useMutation<todoT, Error, EditTodoArgs>({
        mutationFn: ({ _id, data }) =>
            request.put(`/todo/${_id}`, data).then((res) => res.data),
    });
};
