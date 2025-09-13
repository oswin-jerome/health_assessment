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
import { Assessment, AssessmentAnswer, Question } from "@/types";
import AyurvedicProfile from "./ResultProfile";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
    const { t, i18n } = useTranslation();

    const findHighest = (kapha: number, pitta: number, vata: number) => {
        if (kapha >= pitta && kapha >= vata) {
            return "kapha";
        } else if (pitta >= kapha && pitta >= vata) {
            return "pitta";
        } else {
            return "vata";
        }
    };

    const getQuestion = (question: Question) => {
        if (i18n.language == "hi") {
            return question.question_hi;
        }
        if (i18n.language == "kn") {
            return question.question_kn;
        }

        return question.question;
    };

    const total = assessment.pitta + assessment.vata + assessment.kapha;

    const componentRef = useRef();

    const downloadPDF = async () => {
        const element = componentRef.current;

        if (!element) return;
        // Convert to canvas, ignore elements with class 'ignore-pdf'
        const canvas = await html2canvas(element, {
            scale: 2,
            ignoreElements: (el) => el.classList.contains("ignore-pdf"),
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        while (heightLeft > 0) {
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            position -= pageHeight;
            if (heightLeft > 0) pdf.addPage();
        }

        pdf.save("download.pdf");
    };

    return (
        <WebLayout>
            <div
                className="container mx-auto p-4 space-y-4"
                ref={componentRef as any}
            >
                <div className="grid md:flex gap-4">
                    <AyurvedicProfile
                        age={assessment.age}
                        gender={"Male"}
                        name={assessment.name}
                        pitta={findPercentage(assessment.pitta, total)}
                        vata={findPercentage(assessment.vata, total)}
                        kapa={findPercentage(assessment.kapha, total)}
                    />
                    <Card className="flex-1 ignore-pdf">
                        <CardHeader>
                            <CardTitle>
                                {t("Your customized diet plan is ready")}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-row gap-2">
                            <a
                                href={route("download", {
                                    _query: {
                                        element: "kapha",
                                    },
                                })}
                            >
                                <Button>
                                    {t("Download")} ({t("Kapha")})
                                </Button>
                            </a>
                            <a
                                href={route("download", {
                                    _query: {
                                        element: "pitta",
                                    },
                                })}
                            >
                                <Button>
                                    {t("Download")} ({t("Pitta")})
                                </Button>
                            </a>
                            <a
                                href={route("download", {
                                    _query: {
                                        element: "vata",
                                    },
                                })}
                            >
                                <Button>
                                    {t("Download")} ({t("Vata")})
                                </Button>
                            </a>
                            <Button onClick={downloadPDF} className="">
                                {t("download_result")}
                            </Button>
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
                                                {getQuestion(answer.question)}
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
