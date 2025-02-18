import { Header } from "./header";
import { Footer } from "./footer";
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
            <footer className="pt-[93px]">
                <Footer />
            </footer>
        </div>
    );
};
