import { Button } from "@/components/ui/button";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import WebLayout from "@/Layouts/WebLayout";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiseLoader } from "react-spinners";
import Lottie from "lottie-react";
import groovyWalkAnimation from "@/assets/Animation.json";
interface Question {
    id: number;
    question: string;
    question_kn: string;
    question_hi: string;
    pitta: boolean;
    vata: boolean;
    kapha: boolean;
}
const TestPage = ({
    questions,
    assessment,
}: {
    questions: Question[];
    assessment: any;
}) => {
    const [current, setCurrent] = useState(0);
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [end, setEnd] = useState(false);
    const { i18n, t } = useTranslation();

    const [answers, setAnswers] = useState({});

    const handleResponse = (response: boolean) => {
        setLoading(true);
        // Simulate a loading delay
        setTimeout(() => {
            setLoading(false);
            setAnswers({ ...answers, [questions[current].id]: response });
            // Go to the next question if available
            if (current < questions.length - 1) {
                setCurrent(current + 1);
            } else {
                setEnd(true);
            }
        }, 500); // 1-second delay
    };

    const submit = () => {
        setSubmitting(true);
        setTimeout(() => {
            router.post(
                route("assessments.submit", assessment),
                { answers },
                {
                    onFinish: () => {
                        setSubmitting(false);
                    },
                }
            );
        }, 3000);
    };

    return (
        <WebLayout>
            <div className="h-[90vh] grid grid-cols-[auto]">
                <section className="p-4 flex flex-col items-center justify-center">
                    {submitting && (
                        <div className="w-60 mx-auto">
                            <Lottie
                                animationData={groovyWalkAnimation}
                                loop={true}
                            />
                            <p className="text-center">
                                {t(
                                    "Please wait while we are analyzing your result"
                                )}
                                ...
                            </p>
                        </div>
                    )}
                    {loading && <RiseLoader />}
                    {!loading && !end && (
                        <div className="">
                            {i18n.language == "en" && (
                                <p className="text-3xl font-bold text-center">
                                    {questions[current].question}
                                </p>
                            )}
                            {i18n.language == "hi" && (
                                <p className="text-3xl font-bold text-center">
                                    {questions[current].question_hi}
                                </p>
                            )}
                            {i18n.language == "kn" && (
                                <p className="text-3xl font-bold text-center">
                                    {questions[current].question_kn}
                                </p>
                            )}
                            <div className="mt-8 flex gap-4 justify-center">
                                <Button
                                    className="min-w-32"
                                    onClick={() => {
                                        handleResponse(true);
                                    }}
                                >
                                    Yes
                                </Button>
                                <Button
                                    className="min-w-32"
                                    onClick={() => {
                                        handleResponse(false);
                                    }}
                                >
                                    No
                                </Button>
                            </div>
                        </div>
                    )}

                    {end && !submitting && (
                        <div>
                            <Button onClick={submit} className="min-w-44">
                                {t("Submit")}
                            </Button>
                        </div>
                    )}
                </section>
            </div>
        </WebLayout>
    );
};

export default TestPage;
