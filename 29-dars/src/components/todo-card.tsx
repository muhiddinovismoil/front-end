import React from "react";
import { TodoI } from "@/types/todo-type";
import { DeleteBtn } from "./ui/delete.btn";
import { EditBtn } from "./ui/edit.btn";

export const TodoCard = ({ _id, title, description }: TodoI) => {
    return (
        <div className="container">
            <div className="flex justify-center">
                <div className="flex justify-between border p-[20px] w-[650px] rounded-2xl">
                    <div className="flex flex-col gap-[10px]">
                        <p className="font-bold text-[16px]">{title}</p>
                        <p className="font-medium text-[14px]">{description}</p>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <DeleteBtn id={_id} />
                        <EditBtn id={_id} />
                    </div>
                </div>
            </div>
        </div>
    );
};
