import { ReactNode, useState } from "react";
import {
    Menu,
    X,
    Home,
    Settings,
    Users,
    HelpCircle,
    LogOut,
    LucideMessageCircleQuestion,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@inertiajs/react";

export default function AppShell({ children }: { children: ReactNode }) {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);

    const MenuItem = ({
        icon: Icon,
        label,
        href,
    }: {
        icon: React.ElementType;
        label: string;
        href: string;
    }) => (
        <Link href={href}>
            <Button variant="ghost" className="w-full justify-start">
                <Icon className="mr-2 h-4 w-4" />
                {label}
            </Button>
        </Link>
    );

    const SideMenu = () => (
        <ScrollArea className="h-full py-6">
            <div className="flex flex-col space-y-2 px-4">
                {/* <MenuItem icon={Home} label="Home" href="" />
                <MenuItem icon={Users} label="Users" href="" /> */}
                <MenuItem
                    icon={LucideMessageCircleQuestion}
                    label="Questions"
                    href={route("admin.questions.index")}
                />
                {/* <MenuItem icon={HelpCircle} label="Help" href="" /> */}
            </div>
        </ScrollArea>
    );

    return (
        <div className="flex h-screen flex-col">
            {/* Header */}
            <header className="flex h-16 items-center justify-between border-b px-4 lg:px-6">
                <div className="flex items-center gap-4">
                    <Sheet
                        open={isSideMenuOpen}
                        onOpenChange={setIsSideMenuOpen}
                    >
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden"
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">
                                    Toggle side menu
                                </span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[240px] p-0">
                            <SideMenu />
                        </SheetContent>
                    </Sheet>
                    <h1 className="text-lg font-semibold">DashBoard</h1>
                </div>
                <Link href={route("logout")} method="post">
                    <Button variant="ghost" size="icon">
                        <LogOut className="h-6 w-6" />
                        <span className="sr-only">Log out</span>
                    </Button>
                </Link>
            </header>

            {/* Main content area */}
            <div className="flex flex-1 overflow-hidden">
                {/* Side menu - always visible on larger screens */}
                <aside className="hidden w-64 border-r lg:block">
                    <SideMenu />
                </aside>

                {/* Main content */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-4">
                    {children}
                </main>
            </div>
        </div>
    );
}
