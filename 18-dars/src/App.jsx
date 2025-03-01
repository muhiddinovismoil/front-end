import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import React from "react";
import { MainLayout } from "./layout/main-layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
