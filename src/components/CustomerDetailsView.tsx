import BackButton from "./BackButton.tsx";

const CustomerDetailsView = ({customer}: { customer: Customer }) => {
    return <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <BackButton />
                <h2 className="text-2xl font-bold">Customer Details</h2>
            </div>
            {customer && (
                <div className="text-gray-500 text-sm">
                    <p>Created at: {new Date(customer.createdAt).toLocaleString()}</p>
                    <p>Updated at: {new Date(customer.updatedAt).toLocaleString()}</p>
                </div>
            )}
        </div>
        {customer && (
            <div>
                { /** Personal data */}
                <hr className="my-4 border-gray-300"/>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div>
                        <label className="font-semibold">First Name</label>
                        <input type="text" value={customer.firstName} readOnly
                               className="border rounded-md px-3 py-2 w-full bg-gray-200"/>
                    </div>
                    <div>
                        <label className="font-semibold">Last Name</label>
                        <input type="text" value={customer.lastName} readOnly
                               className="border rounded-md px-3 py-2 w-full bg-gray-200"/>
                    </div>
                    <div>
                        <label className="font-semibold">Birth Date</label>
                        <input type="text" value={customer.birthDate.toLocaleString()} readOnly
                               className="border rounded-md px-3 py-2 w-full bg-gray-200"/>
                    </div>
                </div>
                { /** Contact data */}
                <hr className="my-4 border-gray-300"/>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label className="font-semibold">Phone Number</label>
                        <input type="text" value={customer.phoneNumber} readOnly
                               className="border rounded-md px-3 py-2 w-full bg-gray-200"/>
                    </div>
                    <div>
                        <label className="font-semibold">Email</label>
                        <input type="text" value={customer.email} readOnly
                               className="border rounded-md px-3 py-2 w-full bg-gray-200"/>
                    </div>
                </div>
                { /** Loyalty data */}
                <hr className="my-4 border-gray-300"/>
                <div className="grid grid-cols-[4fr_1fr_4fr] gap-4 mt-4">
                    <div>
                        <label className="font-semibold">Loyalty Card Number</label>
                        <input type="text" value={customer.loyalty.bonusCardNumber} readOnly
                               className="border rounded-md px-3 py-2 w-full bg-gray-200"/>
                    </div>
                    <div className="grid grid-rows-2">
                        <label className="font-semibold">Is Active</label>
                        <input type="checkbox" checked={customer.loyalty.active} disabled
                               className="w-5 h-5"/>
                    </div>
                    <div>
                        <label className="font-semibold">Discount Rate</label>
                        <input type="text" value={`${customer.loyalty.discountRate}%`}
                               readOnly
                               className="border rounded-md px-3 py-2 w-full bg-gray-200"/>
                    </div>
                </div>
                <hr className="my-4 border-gray-300"/>
            </div>
        )}
    </div>;
};

export default CustomerDetailsView