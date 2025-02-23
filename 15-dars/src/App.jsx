import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/main-layout";
import { Home } from "./pages/home";
import { CarpetDetails } from "./pages/carpets-details/carpet-details";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="carpets-details/:id"
                        element={<CarpetDetails />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
