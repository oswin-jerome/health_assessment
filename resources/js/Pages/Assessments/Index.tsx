import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import WebLayout from "@/Layouts/WebLayout";
import { Link } from "@inertiajs/react";
import { Assessment } from "@/types";
import moment from "moment";
export default function AssessmentList({
    assessments,
}: {
    assessments: Assessment[];
}) {
    return (
        <WebLayout>
            <div className="container mx-auto py-10">
                <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl font-bold">
                        My Assessments
                    </CardTitle>
                    <Link href={route("assessments.create")}>
                        <Button>Start New Assessment</Button>
                    </Link>
                </div>
                <Table className="mt-8">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {assessments.map((assessment) => (
                            <TableRow key={assessment.id}>
                                <TableCell className="font-medium">
                                    {assessment.name}
                                </TableCell>
                                <TableCell>
                                    {moment(assessment.created_at).format(
                                        "D MMM Y"
                                    )}
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            assessment.completed
                                                ? "default"
                                                : "secondary"
                                        }
                                    >
                                        {assessment.completed
                                            ? "Completed"
                                            : "Pending"}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Link
                                        href={route(
                                            "assessments.show",
                                            assessment.id
                                        )}
                                    >
                                        <Button variant="ghost" size="sm">
                                            <Eye className="mr-2 h-4 w-4" />
                                            View Details
                                        </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </WebLayout>
    );
}
