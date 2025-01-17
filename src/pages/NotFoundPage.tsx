import { Link } from "react-router-dom";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const NotFoundPage = () => {
    return (
        <section className="text-center flex flex-col justify-center items-center py-6">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 p-4 rounded-lg">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <ExclamationTriangleIcon className="w-28 p-4 mx-auto text-yellow-500"/>
                        <h1 className="text-xl font-bold mb-4">404 Not Found</h1>
                        <p className="mb-5">This page does not exist</p>
                        <Link
                            to="/"
                            className="inline-block text-white rounded-lg px-4 py-2 bg-sky-700 hover:bg-gray-800"
                        >Go Back
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default NotFoundPage;