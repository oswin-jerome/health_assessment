import Checkbox from "@/components/Checkbox";
import InputError from "@/components/InputError";
import InputLabel from "@/components/InputLabel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AppShell from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import { useTranslation } from "react-i18next";

const CreateQuestionsPage = () => {
    const { t, i18n } = useTranslation();

    // console.log(i18n.t("Home"));
    const { setData, data, errors, post } = useForm({
        question: "",
        question_hi: "",
        question_kn: "",
        vata: false,
        pitta: false,
        kapha: false,
        vata_neg: false,
        pitta_neg: false,
        kapha_neg: false,
    });

    const handler = (e: FormEvent) => {
        e.preventDefault();
        post(route("admin.questions.store"), {
            onSuccess: () => {
                alert("Added");
            },
        });
    };

    return (
        <AppShell>
            <div>
                <h3 className="font-bold text-2xl">Create Question</h3>
                <form className="grid gap-4 mt-8" onSubmit={handler}>
                    <div>
                        <InputLabel>Question (en)</InputLabel>
                        <Input
                            onChange={(e) =>
                                setData("question", e.target.value)
                            }
                        />
                        <InputError message={errors.question} />
                    </div>
                    <div>
                        <InputLabel>Question (hi)</InputLabel>
                        <Input
                            onChange={(e) =>
                                setData("question_hi", e.target.value)
                            }
                        />
                        <InputError message={errors.question_hi} />
                    </div>
                    <div>
                        <InputLabel>Question (kn)</InputLabel>
                        <Input
                            onChange={(e) =>
                                setData("question_kn", e.target.value)
                            }
                        />
                        <InputError message={errors.question_kn} />
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>For yes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    onChange={(e) =>
                                        setData("pitta", e.target.checked)
                                    }
                                />
                                <InputLabel>Pitta</InputLabel>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    onChange={(e) =>
                                        setData("vata", e.target.checked)
                                    }
                                />
                                <InputLabel>Vata</InputLabel>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
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
                                    onChange={(e) =>
                                        setData("pitta_neg", e.target.checked)
                                    }
                                />
                                <InputLabel>Pitta</InputLabel>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    onChange={(e) =>
                                        setData("vata_neg", e.target.checked)
                                    }
                                />
                                <InputLabel>Vata</InputLabel>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    onChange={(e) =>
                                        setData("kapha_neg", e.target.checked)
                                    }
                                />
                                <InputLabel>Kapha</InputLabel>
                            </div>
                        </CardContent>
                    </Card>
                    <div>
                        <Button>Submit</Button>
                    </div>
                </form>
            </div>
        </AppShell>
    );
};

export default CreateQuestionsPage;
