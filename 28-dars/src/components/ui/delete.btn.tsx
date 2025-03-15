"use client";
import { deleteTodo } from "@/app/service/todo";
import React from "react";

export const DeleteBtn = ({ id }: { id: string }) => {
    const onDelete = () => {
        deleteTodo(id);
    };
    return (
        <button
            onClick={onDelete}
            className="bg-red-500 p-[5px] rounded-[6px] text-[13px] text-white font-bold"
        >
            DELETE
        </button>
    );
};
