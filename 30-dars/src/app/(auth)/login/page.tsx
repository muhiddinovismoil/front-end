"use client";
import { LoginI } from "@/types/auth.type";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../_services/auth.service";
import { useRouter } from "next/navigation";
const Login = () => {
    const {
        handleSubmit,
        reset,
        register,
        setError,
        formState: { errors },
    } = useForm<LoginI>();
    const [transition, setTransition] = React.useTransition();
    const router = useRouter();
    const submit = (data: LoginI) => {
        setTransition(async () => {
            try {
                const res = await loginUser(data);
                router.push("/");
                reset();
            } catch (error) {
                const err = error as Error;
                setError("email", { message: err.message });
            }
        });
    };
    return (
        <div className="border min-h-screen flex justify-center items-center">
            <div className="border w-[340px] flex flex-col gap-[45px] p-[32px] rounded-2xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Login</h2>
                </div>
                <form
                    onSubmit={handleSubmit(submit)}
                    className="flex flex-col gap-[16px]"
                >
                    <div className="w-full">
                        <input
                            {...register("email")}
                            placeholder="Enter email ..."
                            className="border w-full py-[6px] text-[16px] outline-0 rounded-[6px] pl-[12px]"
                            type="email"
                        />
                        {errors.email && (
                            <p className="text-[12px] text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="w-full">
                        <input
                            {...register("password")}
                            placeholder="Enter password ..."
                            className="border w-full py-[6px] text-[16px] outline-0 rounded-[6px] pl-[12px]"
                            type="password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 py-[8px] text-white rounded-[6px]"
                    >
                        {transition ? "Loading ..." : "Sign in"}
                    </button>
                    <Link
                        href={"/register"}
                        className="text-[12px] text-end text-red-500"
                    >
                        If you don't have an account ?
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
