"use client";
import fetchWrapper from "@/app/service/fetcher";
import { TodoFieldI } from "@/types/form-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
const schema = z.object({
    title: z.string().min(3, "Minimum character should be 3"),
    description: z.string().min(3, "Minimum character should be 3"),
});
export const TodoForm = ({ id }: { id?: string }) => {
    const {
        handleSubmit,
        reset,
        register,
        formState: { errors },
    } = useForm<TodoFieldI>({
        resolver: zodResolver(schema),
    });
    const router = useRouter();
    const submit = async (data: TodoFieldI) => {
        if (!id) {
            await fetchWrapper(
                `/todo`,
                {
                    method: "POST",
                    body: JSON.stringify(data),
                },
                "todo_list"
            );
            reset();
        } else {
            await fetchWrapper(
                `/todo/${id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(data),
                },
                "todo_list"
            );
            reset();
            router.back();
        }
    };
    return (
        <div className="pt-[40px]">
            <form
                onSubmit={handleSubmit(submit)}
                className="flex pt-[10px] items-center flex-col gap-[20px]"
            >
                <div className="w-[350px]">
                    <input
                        className="pl-[12px] py-[8px] border outline-0 rounded-2xl w-full"
                        {...register("title")}
                        type="text"
                        placeholder="Enter title ...."
                    />
                    {errors.title && (
                        <p className="text-red-500">{errors.title.message}</p>
                    )}
                </div>
                <div className="w-[350px]">
                    <input
                        className="pl-[12px] py-[8px] border outline-0 rounded-2xl w-full"
                        {...register("description")}
                        type="text"
                        placeholder="Enter description ...."
                    />
                    {errors.description && (
                        <p className="text-red-500">
                            {errors.description.message}
                        </p>
                    )}
                </div>
                <button
                    className="rounded-2xl text-white bg-blue-400 w-[350px] py-[8px]"
                    type="submit"
                >
                    Save
                </button>
            </form>
        </div>
    );
};
