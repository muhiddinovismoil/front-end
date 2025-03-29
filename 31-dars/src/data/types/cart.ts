export interface CartProduct {
    id: string;
    category_id: string;
    title: string;
    picture: string;
    summary: string;
    description: string;
    price: string;
    discount_type: string | null;
    discount_value: string | null;
    tags: string;
    size: string;
    type: string;
    count: number;
    sub_size: string | null;
    userCount: number;
    userPrice: number;
}
