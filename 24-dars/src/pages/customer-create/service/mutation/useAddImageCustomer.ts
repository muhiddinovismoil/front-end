import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useAddImageCustomer = () => {
    return useMutation({
        mutationFn: async (img: File) => {
            const formData = new FormData();
            formData.append("file", img);
            const res = await request.post("/debtors/images", formData);
            return res.data;
        },
        onError: (err) => console.log("Xatolik:", err),
    });
};
