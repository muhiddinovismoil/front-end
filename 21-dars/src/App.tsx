import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { Todo } from "./pages/todo-list/todo";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="create-todo" element={<Todo />} />
                    <Route path="edit-todo/:id" element={<Todo />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
