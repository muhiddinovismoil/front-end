import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetProfileData = () => {
    return useQuery({
        queryKey: ["profile_data"],
        queryFn: () => request.get("/store/profile").then((res) => res.data),
    });
};
