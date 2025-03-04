import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { authUserT } from "../../../../types/auth.type";
import { saveCookieState } from "../../../../config/cookie";

export const useLoginApp = () => {
    return useMutation({
        mutationFn: (data: authUserT) =>
            request.post("/admin/signin", data).then((res) => {
                const { data } = res.data;
                console.log(data.accessToken);
                saveCookieState("user_token", data.accessToken, 15);
                return res.data;
            }),
    });
};
