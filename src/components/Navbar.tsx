import logo from '../assets/images/users.svg'

const Navbar = () => {
    return (
        <nav className="bg-zinc-500 border-b border-indigo-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                            <img className="h-10 w-auto" src={ logo } alt="Customer Service" />
                            <span className="text-white text-2xl font-bold ml-2 px-3 py-2">Customer Service</span>
                        </a>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <a href="/index.html" className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Home</a>
                                <a href="/add-customer.html" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Add customer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;