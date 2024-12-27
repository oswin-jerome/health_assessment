import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, veniam.
            </div>
        </AuthenticatedLayout>
    );
}
