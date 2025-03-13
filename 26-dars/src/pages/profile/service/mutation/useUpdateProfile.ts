import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { ProfileI } from "../../../../types/profile.type";

export const useUpdateProfile = () => {
    return useMutation({
        mutationFn: (data: ProfileI) =>
            request.patch(`/store`, data).then((res) => res.data),
    });
};
