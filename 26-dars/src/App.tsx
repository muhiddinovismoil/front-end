import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/auth/login";
import Home from "./pages/home/home";
import MainLayout from "./layout/main-layout";
import Profile from "./pages/profile/profile";
import Customers from "./pages/customers/customers";
import CustomerCreate from "./pages/customer-create/customer-create";
import CalendarCard from "./pages/calendar/calendar";
import { Debts } from "./pages/debts/debts";
import { AddDebts } from "./pages/debts/add-debt";
import { Repayment } from "./pages/repayment-debt/repayment";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="calendar" element={<CalendarCard />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="create-debtor" element={<CustomerCreate />} />
                    <Route path="create-debt/:id" element={<Debts />} />
                    <Route path="debt-repayment/:id" element={<Repayment />} />
                    <Route path="add-debts/:id" element={<AddDebts />} />
                </Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </>
    );
}

export default App;
