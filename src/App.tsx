import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import AddCustomerPage from "./pages/AddCustomerPage.tsx";
import CustomerDetailsPage, { customerLoader } from "./pages/CustomerDetailsPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import { generateLoyalty } from "./util/LoyaltyGenerator.tsx";

const App = () => {
    const addCustomer = async (newCustomer : Customer) => {
        const updatedCustomer: Customer = {
            ...newCustomer,
            loyalty: newCustomer.loyalty ?? generateLoyalty(),
        };
        await fetch("/api/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedCustomer),
        });
        return;
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/add" element={<AddCustomerPage addCustomerSubmit={addCustomer} />} />
                <Route path="/customers/:id" element={<CustomerDetailsPage />} loader={customerLoader} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        )
    );

    return <RouterProvider router={router}/>;
};

export default App
