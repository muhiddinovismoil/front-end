"use client";
import { RegisterI } from "@/types/auth.type";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../_services/auth.service";
import { signIn } from "next-auth/react";

const Register = () => {
    const { handleSubmit, reset, setError, register } = useForm<RegisterI>();
    const [transition, setTransition] = useTransition();
    const router = useRouter();
    const submit = (data: RegisterI) => {
        setTransition(async () => {
            try {
                const res = await registerUser(data);
                if (res) {
                    router.push("/login");
                }
                reset();
            } catch (error) {
                const err = error as Error;
                setError("email", { message: err.message });
            }
        });
    };
    const handleGoogleSignIn = () => {
        signIn("google");
    };
    return (
        <div className="border min-h-screen flex justify-center items-center">
            <div className="border w-[340px] flex flex-col gap-[45px] p-[32px] rounded-2xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Register</h2>
                </div>
                <form
                    onSubmit={handleSubmit(submit)}
                    className="gap-[20px] flex flex-col"
                >
                    <div className="w-full ">
                        <input
                            {...register("firstname")}
                            type="text"
                            placeholder="Enter your firstname ..."
                            className="w-full border pl-[12px] py-[8px] outline-0 rounded-[8px]"
                        />
                    </div>
                    <div className="w-full ">
                        <input
                            {...register("lastname")}
                            type="text"
                            placeholder="Enter your lastname ..."
                            className="w-full border pl-[12px] py-[8px] outline-0 rounded-[8px]"
                        />
                    </div>
                    <div className="w-full ">
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="Enter your email ..."
                            className="w-full border pl-[12px] py-[8px] outline-0 rounded-[8px]"
                        />
                    </div>
                    <div className="w-full ">
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="Enter your password ..."
                            className="w-full border pl-[12px] py-[8px] outline-0 rounded-[8px]"
                        />
                    </div>
                    <button className="bg-blue-500 py-[8px] rounded-[6px] text-white">
                        {transition ? "Loading ..." : "Sign up"}
                    </button>
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="border py-[6px] rounded-[6px] flex items-center justify-center gap-2 mt-2"
                    >
                        <img
                            src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-tmg5cp5v.png"
                            alt="Google"
                            className="w-8 h-8"
                        />
                        Sign up with Google
                    </button>
                    <Link
                        href={"/login"}
                        className="text-[12px] text-end text-red-500"
                    >
                        Already have an account ?
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Register;
