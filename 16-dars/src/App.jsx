import { Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import Todos from "./pages/todos/todos";
import { Home } from "./pages/home/home";
import React from "react";
import { message } from "antd";
import { Login } from "./pages/login/login";

export const MessageContext = React.createContext(null);
function App() {
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <>
            <MessageContext.Provider value={messageApi}>
                {contextHolder}
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/app" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="create-todo" element={<Todos />} />
                        <Route path="edit-todo/:id" element={<Todos />} />
                    </Route>
                </Routes>
            </MessageContext.Provider>
        </>
    );
}
export default App;
