import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { TodoContext } from "./context/todo-context/todo-context.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <TodoContext>
            <App />
        </TodoContext>
    </BrowserRouter>
);
