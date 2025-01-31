import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import WebLayout from "@/Layouts/WebLayout";
import { useForm } from "@inertiajs/react";
import InputError from "@/components/InputError";
import { useTranslation } from "react-i18next";

export default function StartAssessment() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const { t, i18n } = useTranslation();

    const { data, setData, post, errors } = useForm({
        name: "",
        phone: "",
        age: "",
        gender: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("assessments.store"));
    };

    return (
        <WebLayout>
            <div className="container mx-auto py-10">
                <Card className="max-w-md mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center">
                            {t("Start Assessment")}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">{t("Full Name")}</Label>
                                <Input
                                    id="name"
                                    placeholder="Enter your full name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.name} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone #</Label>
                                <Input
                                    id="phone"
                                    placeholder="Enter your Phone #"
                                    value={data.phone}
                                    maxLength={10}
                                    minLength={10}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.phone} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="age">{t("Age")}</Label>
                                <Input
                                    id="age"
                                    placeholder="Enter age"
                                    value={data.age}
                                    onChange={(e) =>
                                        setData("age", e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.age} />
                            </div>
                            <div className="space-y-2">
                                <Label>{t("Gender")}</Label>
                                <RadioGroup
                                    value={data.gender}
                                    onValueChange={(val) => {
                                        setData("gender", val);
                                    }}
                                    required
                                >
                                    <div className="flex space-x-4">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem
                                                value="male"
                                                id="male"
                                            />
                                            <Label htmlFor="male">Male</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem
                                                value="female"
                                                id="female"
                                            />
                                            <Label htmlFor="female">
                                                Female
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem
                                                value="other"
                                                id="other"
                                            />
                                            <Label htmlFor="other">Other</Label>
                                        </div>
                                    </div>
                                </RadioGroup>
                            </div>
                            <Button className="w-full" type="submit">
                                {t("Start Assessment")}
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </div>
        </WebLayout>
    );
}
