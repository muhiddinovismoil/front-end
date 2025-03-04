import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter } from "react-router-dom";
import { client } from "./config/query-client.ts";

createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QueryClientProvider>
);
