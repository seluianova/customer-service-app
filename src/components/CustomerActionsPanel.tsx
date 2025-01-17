import {Link} from "react-router-dom";

const CustomerActionsPanel = () => {
    return <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Actions</h2>
        </div>
        <hr className="my-4 border-gray-300"/>
        <div className="text-center flex space-x-2 justify-center items-center">
            <Link
                to="/"
                className="inline-block text-white rounded-lg px-4 py-2 bg-sky-700 hover:bg-gray-800"
            >Go Back
            </Link>
        </div>
    </div>;
};

export default CustomerActionsPanel