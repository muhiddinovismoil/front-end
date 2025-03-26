import { useQuery } from "@tanstack/react-query";

export interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export const getPostFetch = async (filter: object): Promise<Posts[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
};
const getPost = (filter: object) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: () => getPostFetch(filter),
    });
    return { data, isLoading };
};
export default getPost;
