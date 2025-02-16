import { useState } from "react";
import { MainLayout } from "./layouts/main-layouts";
import { Form } from "./components/form";
import { Card } from "./components/card";
import { nanoid } from "nanoid";

function App() {
    const [data, setData] = useState([]);
    const addTodo = (title, description) => {
        setData([...data, { id: nanoid(), title, description }]);
    };
    const deleteTodo = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const editTodo = (id, newTitle, newDescription) => {
        setData(
            data.map((item) =>
                item.id === id
                    ? { ...item, title: newTitle, description: newDescription }
                    : item
            )
        );
    };
    return (
        <>
            <MainLayout>
                <div className="container justify-center flex items-center flex-col">
                    <Form addTodo={addTodo} />
                </div>
                <section className="pt-[60px]">
                    <div className="container">
                        {data.map((item) => (
                            <Card
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                deleteTodo={deleteTodo}
                                editTodo={editTodo}
                            />
                        ))}
                    </div>
                </section>
            </MainLayout>
        </>
    );
}
export default App;
