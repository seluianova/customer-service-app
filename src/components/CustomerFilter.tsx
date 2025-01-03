import { useState } from "react";

const CustomerFilter = () => {
    const [ filter, setFilter ] = useState("");
    const [ lastName, setLastName ] = useState("");

    return (
        <div className="flex gap-4 w-96 mt-4 mb-6">
            <input
                type="search"
                placeholder="Enter last name..."
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
            <button
                className="inline-block text-white rounded-lg px-4 py-2 bg-sky-700 hover:bg-gray-800"
                onClick={() => setFilter(lastName)}>Search
            </button>
        </div>
    );
};

export default CustomerFilter;