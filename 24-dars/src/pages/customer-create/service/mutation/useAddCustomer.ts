import { useMutation } from "@tanstack/react-query";
import { loadCookieState } from "../../../../config/cookie";
import { request } from "../../../../config/request";

export const useAddCustomer = () => {
    return useMutation({
        mutationFn: async (data) => {
            const token = loadCookieState("user_token");
            console.log(data);
            const res = await request.post("/debtors", data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return res.data;
        },
        onError: (err) => {
            console.error(err);
        },
    });
};
