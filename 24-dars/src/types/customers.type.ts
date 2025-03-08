export interface CustomersType {
    id: string;
    image: string;
    is_active: boolean;
    key: string;
    full_name: string;
    phone_number: string;
    address: string;
}
export type CustomerFieldType = {
    full_name?: string;
    phone_number?: string;
    address?: string;
    note?: string;
    image?: string;
};
