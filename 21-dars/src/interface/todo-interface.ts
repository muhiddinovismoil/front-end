export interface todoT {
    title: string;
    description: string;
    _id?: string;
}
export interface TodoResponse {
    data: todoT[];
}
