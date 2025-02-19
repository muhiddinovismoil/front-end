import React from "react";
import nodataImg from "../assets/no-data.jpg";
import { TodoContextProvider } from "../context/todo-context/todo-context";
import { TaskCard } from "../components/tasks-card";

export const TaskList = () => {
    const { data, dispatch } = React.useContext(TodoContextProvider);
    return (
        <div>
            {data?.todoList?.length ? (
                <div>
                    {data?.todoList?.map((item) => (
                        <TaskCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            ) : (
                <div className="w-[800px]">
                    <img src={nodataImg} alt="no-data" />
                </div>
            )}
        </div>
    );
};
