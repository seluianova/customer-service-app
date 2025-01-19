import CustomerActionsPanel from "../components/CustomerActionsPanel.tsx";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton.tsx";

const AddCustomerPage = ({ addCustomerSubmit } : { addCustomerSubmit: (customerData: any) => void }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevents page reload and data loss
        const newCustomer = {
            firstName,
            lastName,
            birthDate,
            phoneNumber,
            email,
        };
        addCustomerSubmit(newCustomer);
        return navigate("/");
    }

    return (
        <section className="py-4">
            <form onSubmit={submitForm}>
                <div className="container-xl lg:container m-auto">
                    <div className="grid grid-cols-[3fr_1fr] gap-4 p-4 rounded-lg">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <BackButton/>
                                <h2 className="text-2xl font-bold">Add Customer</h2>
                            </div>
                            <hr className="my-4 border-gray-300"/>
                            <div>
                                <div className="grid grid-cols-3 gap-4 mt-4">
                                    <div>
                                        <label className="font-semibold" htmlFor="first_name">First Name</label>
                                        <input type="text"
                                               id="first_name"
                                               placeholder="John"
                                               value={firstName}
                                               onChange={(e) => setFirstName(e.target.value)}
                                               required
                                               className="border rounded-md px-3 py-2 w-full"/>
                                    </div>
                                    <div>
                                        <label className="font-semibold" htmlFor="last_name">Last Name</label>
                                        <input type="text"
                                               id="last_name"
                                               placeholder="Doe"
                                               value={lastName}
                                               onChange={(e) => setLastName(e.target.value)}
                                               required
                                               className="border rounded-md px-3 py-2 w-full"/>
                                    </div>
                                    <div>
                                        <label className="font-semibold" htmlFor="birth_date">Birth Date</label>
                                        <input type="date"
                                               id="birth_date"
                                               value={birthDate}
                                               onChange={(e) => setBirthDate(e.target.value)}
                                               required
                                               className="border rounded-md px-3 py-2 w-full"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <label className="font-semibold" htmlFor="phone_number">Phone Number</label>
                                        <input type="text"
                                               id="phone_number"
                                               placeholder="+7XXXXXXX"
                                               value={phoneNumber}
                                               onChange={(e) => setPhoneNumber(e.target.value)}
                                               required
                                               className="border rounded-md px-3 py-2 w-full"/>
                                    </div>
                                    <div>
                                        <label className="font-semibold" htmlFor="email">Email</label>
                                        <input type="email"
                                               id="email"
                                               placeholder="john.doe@gmail.com"
                                               value={email}
                                               onChange={(e) => setEmail(e.target.value)}
                                               required
                                               className="border rounded-md px-3 py-2 w-full"/>
                                    </div>
                                </div>
                                <hr className="my-4 border-gray-300"/>
                            </div>
                        </div>
                        <CustomerActionsPanel/>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AddCustomerPage;