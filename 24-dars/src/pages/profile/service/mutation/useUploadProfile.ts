import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useUploadProfile = () => {
    return useMutation({
        mutationFn: async (data) => {
            const res = await request.post("/store/profile-image", data);
            return res.data;
        },
    });
};
