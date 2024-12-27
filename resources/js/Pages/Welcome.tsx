import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Leaf, Activity, Apple, SpaceIcon as Yoga } from "lucide-react";
import WebLayout from "@/Layouts/WebLayout";
import { EmblaCarousel } from "@/components/Slider";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <WebLayout>
            <Head title="Welcome" />
            <main className="flex-1 relative">
                <Link
                    href="/"
                    className="fixed z-50 bottom-4 right-4 bg-green-600 rounded-lg p-2 shadow-lg hover:bg-green-500 hover:scale-105"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                        ></path>
                    </svg>
                </Link>
                <EmblaCarousel />

                <section
                    id="features"
                    className="w-full py-12 md:py-24 lg:py-24 bg-app-100"
                >
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold text-red-800 tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                            Our Features
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card className="">
                                <CardHeader>
                                    <Activity className="h-6 w-6 mb-2 text-green-600" />
                                    <CardTitle className="text-red-800">
                                        Personalized Assessment
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-red-800/70">
                                        Take our comprehensive questionnaire to
                                        determine your unique Ayurvedic
                                        constitution.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Apple className="h-6 w-6 mb-2 text-green-600" />
                                    <CardTitle className="text-red-800">
                                        Customized Diet Plan
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-red-800/70">
                                        Receive a tailored diet plan based on
                                        your Ayurvedic type to promote balance
                                        and wellness.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Yoga className="h-6 w-6 mb-2 text-green-600" />
                                    <CardTitle className="text-red-800">
                                        Exercise Recommendations
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-red-800/70">
                                        Get personalized exercise and yoga
                                        recommendations to complement your
                                        Ayurvedic lifestyle.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section
                    id="questionnaire"
                    className="w-full py-12 md:py-24 lg:py-32 bg-red-800 text-white"
                >
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Start Your Ayurvedic Journey
                                </h2>
                                <p className="mx-auto max-w-[700px] text-white/60 md:text-xl">
                                    Answer a few questions about your lifestyle
                                    and health to receive your personalized
                                    Ayurvedic plan.
                                </p>
                            </div>
                            <Button
                                size="lg"
                                asChild
                                className="bg-white text-app-800 hover:bg-gray-100"
                            >
                                <Link href="/assessments/create">
                                    Take the Questionnaire
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </WebLayout>
    );
}
