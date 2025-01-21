import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import AppShell from "@/Layouts/AuthenticatedLayout";
import { Assessment } from "@/types";
import { Link } from "@inertiajs/react";
import { CheckIcon, Trash } from "lucide-react";

interface Question {
    id: number;
    question: string;
    pitta: boolean;
    vata: boolean;
    kapha: boolean;
}

const QuestionIndex = ({ assessments }: { assessments: Assessment[] }) => {
    return (
        <AppShell>
            <div className="mb-8 flex justify-between items-center">
                <h3 className="font-bold text-2xl">Assessments</h3>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Payment Status</TableHead>
                        <TableHead>Payment ID</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {assessments.map((question) => {
                        return (
                            <TableRow key={question.id}>
                                <TableCell>{question.name}</TableCell>
                                <TableCell>{question.phone}</TableCell>
                                <TableCell>{question.payment_status}</TableCell>
                                <TableCell>
                                    {question.instamojo_payment_id}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </AppShell>
    );
};

export default QuestionIndex;
