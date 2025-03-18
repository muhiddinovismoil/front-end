import { TodoFieldI } from "./form-type";

export interface ResponseI {
    message: string;
    statusCode: number;
    data: TodoFieldI[];
}
