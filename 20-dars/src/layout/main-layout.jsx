import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { ScrollToTop } from "../utils/scroll-top";
export const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <ScrollToTop />
            <header>
                <Header />
            </header>
            <main className="flex-grow">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};
