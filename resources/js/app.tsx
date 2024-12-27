import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
// import "./i18n"; // Import the i18n setup
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        console.log({
            [props.initialPage.props.lang]: {
                translation: props.initialPage.props.translations,
            },
        });
        i18n.use(initReactI18next).init({
            resources: {
                [props.initialPage.props.lang]: {
                    translation: props.initialPage.props.translations,
                },
            },
            lng: props.initialPage.props.lang, // set initial language
            fallbackLng: props.initialPage.props.lang,
            interpolation: {
                escapeValue: false, // React already escapes values
            },
        });
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
