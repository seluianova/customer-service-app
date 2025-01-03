import Button from "./Button.tsx";

const CustomerFilter = () => {
    return (
        <div className="flex gap-4 w-96 mt-4 mb-6">
            <input
                type="text"
                placeholder="Enter last name..."
                // value={filter}
                // onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
            <Button title="Search" href="tbd.html"/>
        </div>
    );
};

export default CustomerFilter;