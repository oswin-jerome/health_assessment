export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};

export interface Assessment {
    id: number;
    pitta: number;
    kapha: number;
    vata: number;
    total_questions: number;
    user_id: number;
    completed: number;
    name: string;
    phone: string;
    payment_status: string;
    instamojo_payment_id: string;
    age: number;
    created_at: Date;
    updated_at: Date;
}

export interface AssessmentAnswer {
    id: number;
    question_id: number;
    assessment_id: number;
    answer: string;
    created_at: Date;
    updated_at: Date;
    question: Question;
}

export interface Question {
    id: number;
    question: string;
    question_hi: string;
    question_kn: string;
    vata: number;
    pitta: number;
    kapha: number;
    created_at: Date;
    updated_at: Date;
}

export interface Assessment {
    id: number;
    pitta: number;
    kapha: number;
    vata: number;
    total_questions: number;
    user_id: number;
    completed: number;
    name: string;
    age: number;
    created_at: Date;
    updated_at: Date;
}
