"use client";
import { useRouter } from "next/navigation";
import React from "react";
export const EditBtn = ({ id }: { id: string }) => {
    const router = useRouter();
    const onEdit = () => {
        router.push(`/edit-todo/${id}`);
    };
    return (
        <button
            onClick={onEdit}
            className="bg-green-400 p-[5px] rounded-[6px] text-[13px] text-white font-bold"
        >
            EDIT
        </button>
    );
};
