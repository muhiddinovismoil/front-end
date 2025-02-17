import { useEffect, useState } from "react";
import { request } from "./config/request";
import { Card } from "./components/card";
import { Form } from "./components/form";

function App() {
    const [users, setUsers] = useState([]);
    const globalFunc = () => {
        request.get("/todos").then((res) => {
            setUsers(res.data);
        });
    };
    useEffect(globalFunc, []);
    return (
        <>
            <Form globalFunc={globalFunc} />
            <div className="pt-[60px]">
                {users.map((item) => {
                    return (
                        <Card
                            users={users}
                            globalFunc={globalFunc}
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default App;
