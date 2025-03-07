import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/auth/login";
import Home from "./pages/home/home";
import MainLayout from "./layout/main-layout";
import Profile from "./pages/profile/profile";
import Customers from "./pages/customers/customers";
import CustomerCreate from "./pages/customer-create/customer-create";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="calendar" />
                    <Route path="customers" element={<Customers />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="create-debtor" element={<CustomerCreate />} />
                </Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </>
    );
}

export default App;
