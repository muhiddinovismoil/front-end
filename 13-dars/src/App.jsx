import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/main-layout";
import { Header } from "./layouts/header/header";
import { CreateTaskForm } from "./pages/create-task";
import { TaskList } from "./pages/task-list";
import { EditTask } from "./pages/edit-task";
import notFoundImg from "./assets/not-found.jpg";
import { NotFound } from "./pages/not-found";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout header={<Header />} />}>
                    <Route index element={<MainLayout main={<TaskList />} />} />
                </Route>
                <Route
                    path="*"
                    element={<NotFound img={notFoundImg} />}
                ></Route>
                <Route
                    path="edit-todo/:id"
                    element={<MainLayout main={<EditTask />} />}
                ></Route>
                <Route
                    path="/create-todo"
                    element={<MainLayout main={<CreateTaskForm />} />}
                ></Route>
            </Routes>
        </>
    );
}
export default App;
