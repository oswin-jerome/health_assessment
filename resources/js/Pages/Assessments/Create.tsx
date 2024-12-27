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

export default function StartAssessment() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const { data, setData, post, errors } = useForm({
        name: "",
        age: "",
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
                            Start Assessment
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
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
                                <Label htmlFor="age">Age</Label>
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
                                <Label>Gender</Label>
                                <RadioGroup
                                    value={gender}
                                    onValueChange={setGender}
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
                                Start Assessment
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </div>
        </WebLayout>
    );
}
