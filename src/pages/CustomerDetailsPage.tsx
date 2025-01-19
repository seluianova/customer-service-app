import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import CustomerActionsPanel from "../components/CustomerActionsPanel.tsx";
import CustomerDetailsView from "../components/CustomerDetailsView.tsx";

const customerLoader = async ({ params } : LoaderFunctionArgs) => {
    const res = await fetch(`/api/customers/${params.id}`);
    return await res.json();
}

const CustomerDetailsPage = () => {
    const customer = useLoaderData();

    return (
        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-[3fr_1fr] gap-4 p-4 rounded-lg">
                    <CustomerDetailsView customer={customer}/>
                    <CustomerActionsPanel />
                </div>
            </div>
        </section>
    );
};

export { CustomerDetailsPage as default, customerLoader };