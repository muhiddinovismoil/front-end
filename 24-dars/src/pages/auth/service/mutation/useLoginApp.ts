import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { authUserT } from "../../../../types/auth.type";
import { saveCookieState } from "../../../../config/cookie";

export const useLoginApp = () => {
    return useMutation({
        mutationFn: (data: authUserT) =>
            request.post("/auth/signin", data).then((res) => {
                const { data } = res.data;
                saveCookieState("user_token", data.accessToken, 60);
                return res.data;
            }),
    });
};
