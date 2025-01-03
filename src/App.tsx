import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import AddCustomerPage from "./pages/AddCustomerPage.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/add" element={<AddCustomerPage />} />
        </Route>
    )
);

const App = () => {
    return <RouterProvider router={router}/>;
};

export default App
