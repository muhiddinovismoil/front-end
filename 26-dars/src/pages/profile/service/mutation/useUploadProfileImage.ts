import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useUploadProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (formData: FormData) =>
            request
                .post("/store/profile-image", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                })
                .then((res) => res.data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["profile_data"] });
        },
    });
};
