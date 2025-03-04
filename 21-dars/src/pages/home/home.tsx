import { TodoCard } from "./components/todo-card";
import { useGetAllTodo } from "./service/query/useGetAllTodo";
import noDataFound from "../../assets/no-data.jpg";

export const Home = () => {
    const { data, isLoading } = useGetAllTodo();
    const todos = data?.data || [];
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (todos.length === 0) {
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <img
                    src={noDataFound}
                    alt="No Data Found"
                    style={{ width: "300px", height: "auto" }}
                />
                <p style={{ fontSize: "18px", color: "#888" }}>
                    No todos available
                </p>
            </div>
        );
    }
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                }}
            >
                {todos.map((item: any) => (
                    <TodoCard
                        key={item._id}
                        _id={item._id}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </>
    );
};
