import logo from '../assets/images/users.svg'
import { NavLink } from "react-router-dom";

const Navbar = ({ title = 'Customer Service' }) => {
    const linkClass = ({ isActive }: { isActive: boolean }) => isActive ?
        "inline-block text-white rounded-lg px-4 py-2 bg-black hover:bg-gray-800" :
        "inline-block text-white rounded-lg px-4 py-2 bg-sky-700 hover:bg-gray-800";

    return (
        <nav className="bg-sky-900 border-b border-indigo-500">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 gap-4 p-4">
                    <div className="flex flex-shrink-0 items-center mr-4">
                        <img className="h-10 w-auto" src={logo} alt="Customer Service"/>
                        <span className="text-white text-2xl font-bold ml-2 px-3 py-2">{title}</span>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <NavLink to="/" className={linkClass}>Home</NavLink>
                                <NavLink to="/add" className={linkClass}>Add customer</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;