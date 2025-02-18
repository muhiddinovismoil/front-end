import { MainLayout } from "./layouts/main-layout";
import { Route, Routes } from "react-router-dom";
import { MainData } from "./pages/home/home";
import { NotFoundPage } from "./pages/page-not-found/not-found";
import { BookDetail } from "./pages/book-detail/book-detail";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainData />} />
                <Route
                    path="/book-detail/:id"
                    element={
                        <MainLayout>
                            <BookDetail />
                        </MainLayout>
                    }
                />
                <Route
                    path="*"
                    element={
                        <MainLayout>
                            <NotFoundPage />
                        </MainLayout>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
