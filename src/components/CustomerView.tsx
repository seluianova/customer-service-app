const CustomerView = () => {
    return (
        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 gap-4 p-4 rounded-lg">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold">Customers</h2>
                        <p className="mt-2 mb-4">
                            List of all customers will be displayed here
                        </p>
                        <a
                            href="/placeholder.html"
                            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                        >
                            Search
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerView;