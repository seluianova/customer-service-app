import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.tsx";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 min-h-screen">
                <Outlet />
            </div>
        </>
    )
};

export default MainLayout;
