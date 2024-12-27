import LanguageSwitcher from "@/components/LanguageSwitch";
import { EmblaCarousel } from "@/components/Slider";
import { Link, usePage } from "@inertiajs/react";
import { Leaf } from "lucide-react";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

const WebLayout = ({ children }: { children: ReactNode }) => {
    const page = usePage();
    const { t, i18n } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex z-50 items-center  fixed bg-gradient-to-tr from-app-600 to-app-800 text-white shadow left-0 right-0">
                <Link className="flex items-center justify-center" href="/">
                    <Leaf className="h-6 w-6 text-green-600" />
                    <span className="ml-2 text-2xl font-bold text-gray-900">
                        AyurHealth
                    </span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        href={"/"}
                        className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        {t("Home")}
                    </Link>
                    <Link
                        href={""}
                        className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        {t("About")}
                    </Link>
                    {page.props.auth.user ? (
                        <>
                            <Link
                                href={route("dashboard")}
                                className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href={route("assessments.index")}
                                className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Assessments
                            </Link>
                            <Link
                                href={route("logout")}
                                method="post"
                                className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route("register")}
                                className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </header>
            <div className="min-h-[92vh]  pt-14">{children}</div>
            <footer className="flex flex-col justify-between bg-app-950 text-white gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs ">
                    © 2023 AyurHealth. All rights reserved.
                </p>
                <nav className=" flex gap-4 sm:gap-6">
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        Privacy
                    </Link>
                    <LanguageSwitcher />
                </nav>
                <div>sd</div>
            </footer>
        </div>
    );
};

export default WebLayout;
