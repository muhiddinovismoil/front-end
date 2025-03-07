import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { loadCookieState } from "../../../../config/cookie";

export const useUploadProfile = () => {
    return useMutation({
        mutationFn: async (data) => {
            const getToken = loadCookieState("user_token");
            const res = await request.post("/store/profile-image", data, {
                headers: {
                    Authorization: `Bearer ${getToken}`,
                },
            });
            return res.data;
        },
    });
};
