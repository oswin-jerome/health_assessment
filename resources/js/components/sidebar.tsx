"use client";

import { useState } from "react";
import {
    Menu,
    X,
    Home,
    Settings,
    Users,
    HelpCircle,
    LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function AppShell() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);

    const MenuItem = ({
        icon: Icon,
        label,
    }: {
        icon: React.ElementType;
        label: string;
    }) => (
        <Button variant="ghost" className="w-full justify-start">
            <Icon className="mr-2 h-4 w-4" />
            {label}
        </Button>
    );

    const SideMenu = () => (
        <ScrollArea className="h-full py-6">
            <div className="flex flex-col space-y-2 px-4">
                <MenuItem icon={Home} label="Home" />
                <MenuItem icon={Users} label="Users" />
                <MenuItem icon={Settings} label="Settings" />
                <MenuItem icon={HelpCircle} label="Help" />
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
                    <h1 className="text-lg font-semibold">App Shell</h1>
                </div>
                <Button variant="ghost" size="icon">
                    <LogOut className="h-6 w-6" />
                    <span className="sr-only">Log out</span>
                </Button>
            </header>

            {/* Main content area */}
            <div className="flex flex-1 overflow-hidden">
                {/* Side menu - always visible on larger screens */}
                <aside className="hidden w-64 border-r lg:block">
                    <SideMenu />
                </aside>

                {/* Main content */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-6">
                    <div className="h-full rounded-lg border-2 border-dashed border-gray-200 p-4">
                        <h2 className="text-2xl font-bold">
                            Main Content Area
                        </h2>
                        <p className="mt-2">Your main content goes here.</p>
                    </div>
                </main>
            </div>
        </div>
    );
}
