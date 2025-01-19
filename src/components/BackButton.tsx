import { Link } from "react-router-dom";

const BackButton = () => {
    return <Link to="/" className="mr-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             strokeWidth={2}
             stroke="currentColor"
             className="w-5 h-5 text-gray-700"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
        </svg>
    </Link>
};

export default BackButton