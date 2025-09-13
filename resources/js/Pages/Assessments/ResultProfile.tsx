import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { User } from "lucide-react";
import { useTranslation } from "react-i18next";

interface AyurvedicProfileProps {
    name: string;
    age: number;
    gender: string;
    kapa: number;
    pitta: number;
    vata: number;
}

export default function AyurvedicProfile({
    name,
    age,
    gender,
    kapa,
    pitta,
    vata,
}: AyurvedicProfileProps) {
    const { t } = useTranslation();

    return (
        <Card className="w-full ">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="w-12 h-12 rounded-full bg-app-800 flex items-center justify-center">
                    <User className="w-6 h-6 text-app-500" />
                </div>
                <div>
                    <CardTitle>{name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                        {age} years old • {gender}
                    </p>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <DoshaBar label="Kapha" value={kapa} />
                    <DoshaBar label="Pitta" value={pitta} />
                    <DoshaBar label="Vata" value={vata} />
                </div>
            </CardContent>
        </Card>
    );
}

function DoshaBar({ label, value }: { label: string; value: number }) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between">
                <span className="text-sm font-medium">{label}</span>
                <span className="text-sm text-muted-foreground">{value}%</span>
            </div>
            <Progress value={value} className="h-2 " />
        </div>
    );
}
