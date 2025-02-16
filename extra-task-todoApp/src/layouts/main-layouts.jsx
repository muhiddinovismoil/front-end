import { Header } from "./header";
// eslint-disable-next-line react/prop-types
export const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div>
                <header>
                    <Header />
                </header>
                <main>{children}</main>
            </div>
        </div>
    );
};
