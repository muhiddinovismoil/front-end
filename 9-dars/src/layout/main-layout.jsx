import { Header } from "../components/header/header.jsx";
import { Footer } from "../components/footer/footer.jsx";

// eslint-disable-next-line react/prop-types
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
