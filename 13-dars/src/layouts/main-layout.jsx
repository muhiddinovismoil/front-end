/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";

export const MainLayout = ({ header, main }) => {
    return (
        <div>
            <div className="container flex justify-center items-center pt-[55px]">
                <header className="container flex justify-center items-center">
                    {header}
                </header>
            </div>
            <main className="container flex justify-center">
                {main}
                <Outlet />
            </main>
        </div>
    );
};
