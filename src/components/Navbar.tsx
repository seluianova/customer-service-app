import logo from '../assets/images/users.svg'
import Button from "./Button.tsx";

const Navbar = ({ title = 'Customer Service' }) => {
    return (
        <nav className="bg-sky-900 border-b border-indigo-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                            <img className="h-10 w-auto" src={ logo } alt="Customer Service" />
                            <span className="text-white text-2xl font-bold ml-2 px-3 py-2">{title}</span>
                        </a>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <Button title="Home" href="/index.html" bg="bg-black" />
                                <Button title="Add customer" href="/add-customer.html" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;