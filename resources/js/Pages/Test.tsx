import { Button } from "@/components/ui/button";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import WebLayout from "@/Layouts/WebLayout";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiseLoader } from "react-spinners";
interface Question {
    id: number;
    question: string;
    question_kn: string;
    question_hi: string;
    pitta: boolean;
    vata: boolean;
    kapha: boolean;
}
const TestPage = ({ questions }: { questions: Question[] }) => {
    const [current, setCurrent] = useState(0);
    const [loading, setLoading] = useState(false);
    const [end, setEnd] = useState(false);
    const { i18n } = useTranslation();

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

    return (
        <WebLayout>
            <div className="bg-slate-100 h-[90vh] grid grid-cols-[auto,250px]">
                <section className="p-4 flex flex-col items-center justify-center">
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
                                <Button className="min-w-32">No</Button>
                            </div>
                        </div>
                    )}

                    {end && (
                        <div>
                            <Button className="min-w-44">Submit</Button>
                        </div>
                    )}
                </section>
                <section className="bg-white p-4">Stats</section>
            </div>
        </WebLayout>
    );
};

export default TestPage;
