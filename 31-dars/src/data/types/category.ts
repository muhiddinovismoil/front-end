export interface Category {
    id: string;
    created_at: string;
    updated_at: string;
    picture: string;
    name: string;
    description: string;
    tag: string;
    products: Product[];
}

export interface Product {
    id: string;
    created_at: string;
    updated_at: string;
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
    category: Category;
    reviews: any[];
}

export interface CategoryResponse {
    status_code: 200;
    message: "success";
    data: Category[];
}
export interface ProductResponse {
    status_code: 200;
    message: "success";
    data: {
        products: Product[];
        productCount: number;
    };
}
