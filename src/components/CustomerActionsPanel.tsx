import { Link } from "react-router-dom";

const CustomerActionsPanel = () => {
    return <div>
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Actions</h2>
            </div>
            <hr className="my-4 border-gray-300"/>
            <div className="text-center flex space-x-2 justify-center items-center">
                <button
                    type="submit"
                    className='bg-sky-700 hover:bg-gray-800 text-white py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                >Save
                </button>
            </div>
            <div className="text-center flex space-x-2 justify-center items-center py-2">
                <Link to="/" className="bg-gray-100 hover:bg-sky-100 text-sky-700 border border-sky-700 py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline">
                    Cancel
                </Link>
            </div>
        </div>
    </div>;
};

export default CustomerActionsPanel