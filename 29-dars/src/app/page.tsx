import { TodoCard } from "@/components/todo-card";
import { TodoForm } from "@/components/todo-form";
import { TodoI } from "@/types/todo-type";
import fetchWrapper from "./service/fetcher";
import { ResponseI } from "@/types/response-type";

export default async function Home() {
    const allTodo = await fetchWrapper<ResponseI>("/todos", {
        next: {
            tags: ["todo_list"],
        },
    });
    const { message, data }: any = await allTodo;
    return (
        <>
            <div className="container">
                <h2 className="text-center mt-[14px] text-4xl font-black">
                    TODO TASKS
                </h2>
                <TodoForm />
                <div className="flex justify-center">
                    <div className="pt-[50px] flex flex-col gap-[40px] h-[600px] overflow-y-auto w-[720px]">
                        {data ? (
                            data?.map((item: TodoI) => {
                                return (
                                    <TodoCard
                                        key={item._id}
                                        _id={item._id}
                                        title={item.title}
                                        description={item.description}
                                    />
                                );
                            })
                        ) : (
                            <h1 className="text-center text-4xl">{message}</h1>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
