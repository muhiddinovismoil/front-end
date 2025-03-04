import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/auth/login";
import Home from "./pages/home/home";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </>
    );
}

export default App;
