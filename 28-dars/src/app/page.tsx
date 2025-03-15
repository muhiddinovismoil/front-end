import { TodoCard } from "@/components/todo-card";
import { TodoForm } from "@/components/todo-form";
import { getAllTodo } from "./service/todo";
import { TodoI } from "@/types/todo-type";

export default async function Home() {
    const allTodo = await getAllTodo();
    const { data }: any = await allTodo;
    return (
        <>
            <div className="container">
                <h2 className="text-center mt-[14px] text-4xl font-black">
                    TODO TASKS
                </h2>
                <TodoForm />
                <div className="flex justify-center">
                    <div className="pt-[50px] flex flex-col gap-[40px] h-[700px] overflow-y-auto w-[720px]">
                        {data?.map((item: TodoI) => {
                            return (
                                <TodoCard
                                    key={item._id}
                                    _id={item._id}
                                    title={item.title}
                                    description={item.description}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
