import { InformationCircleIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CustomerTable = () => {
    const [ customers, setCustomers] = useState<Customer[]>([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const res = await fetch("/api/customers?_limit=10");
                const data = await res.json();
                setCustomers(data);
            } catch (error) {
                console.log("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        }
        fetchCustomers();
    }, []);

    return (
        <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white shadow-sm rounded-lg font-mono text-sm">
                <thead className="bg-gray-200">
                <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">#</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">First Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Last Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Phone</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Birth Date</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Loyalty Number</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
                </tr>
                </thead>
                <tbody>
                {loading && (
                    <tr>
                        <td colSpan={8} className="border border-gray-300 px-4 py-4 text-center text-gray-500">
                            Loading...
                        </td>
                    </tr>
                )}
                {!loading && customers.length === 0 ? (
                    <tr>
                        { /** TODO bug = display less columns when no customers */}
                        <td colSpan={8} className="border border-gray-300 px-4 py-4 text-center text-gray-500">
                            No customers found
                        </td>
                    </tr>
                ) : (
                    customers.map((customer) => (
                        <tr key={customer.id} className="hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-2">{customer.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{customer.firstName}</td>
                            <td className="border border-gray-300 px-4 py-2">{customer.lastName}</td>
                            <td className="border border-gray-300 px-4 py-2">{customer.phoneNumber}</td>
                            <td className="border border-gray-300 px-4 py-2">{customer.email}</td>
                            <td className="border border-gray-300 px-4 py-2">{customer.birthDate.toLocaleString()}</td>
                            <td className="border border-gray-300 px-4 py-2">{customer.loyalty.bonusCardNumber}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Link to={`/customers/${customer.id}`} className="text-blue-500 hover:text-blue-700">
                                    <InformationCircleIcon className="w-5 h-5 inline-block"/>
                                </Link>
                                <Link to="/edit" className="text-blue-500 hover:text-blue-700 px-2">
                                    <PencilSquareIcon className="w-5 h-5 inline-block"/>
                                </Link>
                                <Link to="/delete" className="text-blue-500 hover:text-blue-700">
                                    <TrashIcon className="w-5 h-5 inline-block"/>
                                </Link>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    )
}

export default CustomerTable