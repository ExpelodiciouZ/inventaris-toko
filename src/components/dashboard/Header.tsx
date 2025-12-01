"use client";

import Link from "next/link";
import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export function Header() {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter(Boolean);
    const [userInitials, setUserInitials] = useState("AD");
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user && user.email) {
                setUserInitials(user.email.substring(0, 2).toUpperCase());
            }
        };
        getUser();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
        router.refresh();
    };

    return (
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border/40 bg-background/60 px-6 backdrop-blur-xl transition-all duration-200">
            <div className="flex-1">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        {pathSegments.slice(1).map((segment, index) => (
                            <div key={segment} className="flex items-center">
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    {index === pathSegments.length - 2 ? (
                                        <BreadcrumbPage className="capitalize">{segment}</BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink href={`/dashboard/${segment}`} className="capitalize">{segment}</BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                            </div>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative hidden sm:block">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-64 rounded-full bg-background pl-8 md:w-[200px] lg:w-[300px] border-border/50 focus:border-primary/50 transition-colors"
                    />
                </div>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/50">
                    <Bell size={20} />
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Avatar className="h-8 w-8 border border-border/50">
                                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                <AvatarFallback>{userInitials}</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="glass-card">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/dashboard/settings" className="cursor-pointer w-full">Settings</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/dashboard/support" className="cursor-pointer w-full">Support</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive cursor-pointer" onClick={handleLogout}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
