import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/auth/login";
import Home from "./pages/home/home";
import MainLayout from "./layout/main-layout";
import Profile from "./pages/profile/profile";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="calendar" />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </>
    );
}

export default App;
