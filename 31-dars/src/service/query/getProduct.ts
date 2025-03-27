import { ProductResponse } from "@/data/types/category";
import { useQuery } from "@tanstack/react-query";

export interface IQuery {
    category_id?: string;
    type?: string;
    size?: string;
    minPrice?: number;
    maxPrice?: number;
}
export interface IState {
    page?: number;
    limit?: number;
    query?: IQuery;
}

export const getProductsFetch = async ({
    page,
    limit,
    query,
}: IState): Promise<ProductResponse> => {
    const filterParam = query ? encodeURIComponent(JSON.stringify(query)) : "";

    const res = await fetch(
        `http://13.233.2.40:3133/api/v1/product?page=${page}&limit=${limit}${
            filterParam ? `&filter=${filterParam}` : ""
        }`
    );
    if (!res.ok) {
        throw new Error("Error Fatching");
    }
    return res.json();
};

export const getProducts = ({ page = 1, limit = 9, query }: IState) => {
    return useQuery({
        queryKey: ["products", page, limit, query],
        queryFn: () => getProductsFetch({ page, limit, query }),
    });
};
