import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import React from "react";
import { MainLayout } from "./layout/main-layout";
import { ProductDetails } from "./pages/product-details/product-details";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route
                    path="/product-detail/:id"
                    element={<ProductDetails />}
                />
            </Route>
        </Routes>
    );
}

export default App;
