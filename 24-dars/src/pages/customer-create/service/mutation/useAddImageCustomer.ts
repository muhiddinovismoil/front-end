import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useAddImageCustomer = () => {
    return useMutation({
        mutationFn: async (img: File) => {
            console.log("Mutatsiya chaqirildi! Fayl:", img);

            const formData = new FormData();
            formData.append("file", img);

            const res = await request.post("/debtors/images", formData);

            console.log("Yuklash muvaffaqiyatli!", res.data);
            return res.data;
        },
        onSuccess: () => {
            console.log("Rasm yuklandi!");
        },
        onError: (err) => console.log("Xatolik:", err),
    });
};
