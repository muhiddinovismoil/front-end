import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { theme } from "./config/theme.js";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ConfigProvider theme={theme}>
            <App />
        </ConfigProvider>
    </BrowserRouter>
);
