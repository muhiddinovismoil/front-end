/* eslint-disable react/prop-types */
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";

export const MainLayout = ({ children }) => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};
