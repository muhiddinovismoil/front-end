"use client";
import fetchWrapper from "@/app/service/fetcher";
import React from "react";

export const DeleteBtn = ({ id }: { id: string }) => {
    const onDelete = async () => {
        await fetchWrapper(
            `/todo/${id}`,
            {
                method: "DELETE",
            },
            "todo_list"
        );
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
