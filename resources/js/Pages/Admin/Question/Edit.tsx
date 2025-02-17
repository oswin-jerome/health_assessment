import Checkbox from "@/components/Checkbox";
import InputError from "@/components/InputError";
import InputLabel from "@/components/InputLabel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AppShell from "@/Layouts/AuthenticatedLayout";
import { Question } from "@/types";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import { useTranslation } from "react-i18next";

const CreateQuestionsPage = ({ question }: { question: Question }) => {
    const { t, i18n } = useTranslation();

    // console.log(i18n.t("Home"));
    const { setData, data, errors, put } = useForm({
        question: question.question,
        question_hi: question.question_hi,
        question_kn: question.question_kn,
        vata: question.vata == 1,
        pitta: question.pitta == 1,
        kapha: question.kapha == 1,
        vata_neg: question.vata_neg == 1,
        pitta_neg: question.pitta_neg == 1,
        kapha_neg: question.kapha_neg == 1,
    });

    const handler = (e: FormEvent) => {
        e.preventDefault();
        put(route("admin.questions.update", question.id), {
            onSuccess: () => {
                alert("Update");
            },
        });
    };

    return (
        <AppShell>
            <div>
                <h3 className="font-bold text-2xl">Edit Question</h3>
                <form className="grid gap-4 mt-8" onSubmit={handler}>
                    <div>
                        <InputLabel>Question (en)</InputLabel>
                        <Input
                            value={data.question}
                            onChange={(e) =>
                                setData("question", e.target.value)
                            }
                        />
                        <InputError message={errors.question} />
                    </div>
                    <div>
                        <InputLabel>Question (hi)</InputLabel>
                        <Input
                            value={data.question_hi}
                            onChange={(e) =>
                                setData("question_hi", e.target.value)
                            }
                        />
                        <InputError message={errors.question_hi} />
                    </div>
                    <div>
                        <InputLabel>Question (kn)</InputLabel>
                        <Input
                            value={data.question_kn}
                            onChange={(e) =>
                                setData("question_kn", e.target.value)
                            }
                        />
                        <InputError message={errors.question_kn} />
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>For Yes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    checked={data.pitta}
                                    onChange={(e) =>
                                        setData("pitta", e.target.checked)
                                    }
                                />
                                <InputLabel>Pitta</InputLabel>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    checked={data.vata}
                                    onChange={(e) =>
                                        setData("vata", e.target.checked)
                                    }
                                />
                                <InputLabel>Vata</InputLabel>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    checked={data.kapha}
                                    onChange={(e) =>
                                        setData("kapha", e.target.checked)
                                    }
                                />
                                <InputLabel>Kapha</InputLabel>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>For No</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    checked={data.pitta_neg}
                                    onChange={(e) =>
                                        setData("pitta_neg", e.target.checked)
                                    }
                                />
                                <InputLabel>Pitta</InputLabel>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    checked={data.vata_neg}
                                    onChange={(e) =>
                                        setData("vata_neg", e.target.checked)
                                    }
                                />
                                <InputLabel>Vata</InputLabel>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    checked={data.kapha_neg}
                                    onChange={(e) =>
                                        setData("kapha_neg", e.target.checked)
                                    }
                                />
                                <InputLabel>Kapha</InputLabel>
                            </div>
                        </CardContent>
                    </Card>
                    <div>
                        <Button>Update</Button>
                    </div>
                </form>
            </div>
        </AppShell>
    );
};

export default CreateQuestionsPage;
