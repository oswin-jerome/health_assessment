import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import WebLayout from "@/Layouts/WebLayout";
import { Assessment, AssessmentAnswer } from "@/types";
import AyurvedicProfile from "./ResultProfile";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const ShowAssessment = ({
    answers,
    assessment,
}: {
    answers: AssessmentAnswer[];
    assessment: Assessment;
}) => {
    const findPercentage = (val: number, total: number) => {
        return parseInt(((val / total) * 100).toString());
    };
    const { t } = useTranslation();

    const findHighest = (kapha: number, pitta: number, vata: number) => {
        if (kapha >= pitta && kapha >= vata) {
            return "kapha";
        } else if (pitta >= kapha && pitta >= vata) {
            return "pitta";
        } else {
            return "vata";
        }
    };

    const total = assessment.pitta + assessment.vata + assessment.kapha;
    return (
        <WebLayout>
            <div className="container mx-auto p-4 space-y-4">
                <div className="grid md:flex gap-4">
                    <AyurvedicProfile
                        age={assessment.age}
                        gender={"Male"}
                        name={assessment.name}
                        pitta={findPercentage(assessment.pitta, total)}
                        vata={findPercentage(assessment.vata, total)}
                        kapa={findPercentage(assessment.kapha, total)}
                    />
                    <Card className="flex-1">
                        <CardHeader>
                            <CardTitle>
                                {t("Your customized diet plan is ready")}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <a
                                href={route("download", {
                                    _query: {
                                        element: findHighest(
                                            assessment.kapha,
                                            assessment.pitta,
                                            assessment.vata
                                        ),
                                    },
                                })}
                            >
                                <Button>{t("Download")}</Button>
                            </a>
                        </CardContent>
                    </Card>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>{t("Result")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>{t("Question")}</TableHead>
                                    <TableHead>{t("Your answer")}</TableHead>
                                    <TableHead>{t("Pitta")}</TableHead>
                                    <TableHead>{t("Vata")}</TableHead>
                                    <TableHead>{t("Kapha")}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {answers.map((answer) => {
                                    return (
                                        <TableRow key={answer.id}>
                                            <TableHead>
                                                {answer.question.question}
                                            </TableHead>
                                            <TableHead>
                                                {answer.answer == "1"
                                                    ? "Yes"
                                                    : "No"}
                                            </TableHead>
                                            <TableHead>
                                                {answer.answer == "1" &&
                                                    answer.question.pitta &&
                                                    "+1"}
                                            </TableHead>
                                            <TableHead>
                                                {answer.answer == "1" &&
                                                    answer.question.vata &&
                                                    "+1"}
                                            </TableHead>
                                            <TableHead>
                                                {answer.answer == "1" &&
                                                    answer.question.kapha &&
                                                    "+1"}
                                            </TableHead>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableHead></TableHead>
                                    <TableHead className="text-right font-bold">
                                        Total
                                    </TableHead>
                                    <TableHead>{assessment.pitta}</TableHead>
                                    <TableHead>{assessment.vata}</TableHead>
                                    <TableHead>{assessment.kapha}</TableHead>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </WebLayout>
    );
};

export default ShowAssessment;
