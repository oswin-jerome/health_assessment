import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <div className="text-3xl font-bold">Welcome back!!!</div>
        </AuthenticatedLayout>
    );
}
