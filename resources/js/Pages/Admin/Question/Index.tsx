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
import { Link } from "@inertiajs/react";
import { CheckIcon, Trash } from "lucide-react";

interface Question {
    id: number;
    question: string;
    pitta: boolean;
    vata: boolean;
    kapha: boolean;
}

const QuestionIndex = ({ questions }: { questions: Question[] }) => {
    return (
        <AppShell>
            <div className="mb-8 flex justify-between items-center">
                <h3 className="font-bold text-2xl">Questions</h3>
                <Link href={route("admin.questions.create")}>
                    <Button>Add</Button>
                </Link>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Question</TableHead>
                        <TableHead>Pitta</TableHead>
                        <TableHead>Vata</TableHead>
                        <TableHead>Kapha</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {questions.map((question) => {
                        return (
                            <TableRow key={question.id}>
                                <TableCell>{question.question}</TableCell>
                                <TableCell>
                                    {question.pitta ? (
                                        <CheckIcon />
                                    ) : (
                                        <div></div>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {question.vata ? (
                                        <CheckIcon />
                                    ) : (
                                        <div></div>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {question.kapha ? (
                                        <CheckIcon />
                                    ) : (
                                        <div></div>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <Link
                                        onClick={(e) => {
                                            var t = confirm("Are you sure?");
                                            if (!t) {
                                                e.preventDefault();
                                                e.stopPropagation();
                                            }
                                        }}
                                        href={route(
                                            "admin.questions.destroy",
                                            question.id
                                        )}
                                        method="delete"
                                    >
                                        <Button size={"icon"} variant={"ghost"}>
                                            <Trash />
                                        </Button>
                                    </Link>
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
