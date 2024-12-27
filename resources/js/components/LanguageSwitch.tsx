import React from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { router, useForm } from "@inertiajs/react";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (locale: any) => {
        router.get(
            `/set-locale/${locale}`,
            {},
            {
                onFinish: () => {
                    i18n.changeLanguage(locale);
                    window.location.reload(); // Reload to fetch new translations
                },
            }
        );

        // .then(() => {
        //     // i18n.changeLanguage(locale);
        //     // window.location.reload(); // Reload to fetch new translations
        // });
    };

    return (
        <>
            <button
                className="text-xs hover:underline underline-offset-4"
                onClick={() => changeLanguage("en")}
            >
                English
            </button>
            <button
                className="text-xs hover:underline underline-offset-4"
                onClick={() => changeLanguage("hi")}
            >
                Hindi
            </button>
            <button
                className="text-xs hover:underline underline-offset-4"
                onClick={() => changeLanguage("kn")}
            >
                Kannada
            </button>
        </>
    );
};

export default LanguageSwitcher;
