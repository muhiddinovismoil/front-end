import { ProductResponse } from "@/data/types/category";
import { useQuery } from "@tanstack/react-query";

export const getCategoryFetch = async (): Promise<ProductResponse> => {
    const res = await fetch(
        `${process.env.BACKEND_BASE_URL}/category
      `
    );
    if (!res.ok) {
        throw new Error("Error Fatching");
    }
    return res.json();
};

export const getCategory = () => {
    return useQuery({
        queryKey: ["category"],
        queryFn: () => getCategoryFetch(),
    });
};
