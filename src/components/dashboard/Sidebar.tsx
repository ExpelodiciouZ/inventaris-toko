"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import { Box, LayoutDashboard, Package, Users, Settings, LogOut, FolderTree, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/items", label: "Items", icon: Package },
    { href: "/dashboard/categories", label: "Categories", icon: FolderTree },
    { href: "/dashboard/suppliers", label: "Suppliers", icon: Users },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
    { href: "/dashboard/about", label: "About", icon: Info },
];

export function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
        router.refresh();
    };

    return (
        <div className="hidden border-r border-sidebar-border bg-sidebar/50 backdrop-blur-xl md:block w-64 h-screen fixed left-0 top-0 overflow-y-auto z-40">
            <div className="flex h-16 items-center border-b border-sidebar-border px-6 gap-2">
                <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center text-primary text-xs border border-primary/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                    <Box size={14} />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-lg tracking-tight leading-none">InventarisTokoATK</span>
                    <span className="text-[10px] text-muted-foreground font-medium">by Jeffry UNDIRA</span>
                </div>
            </div>
            <div className="px-3 py-4">
                <nav className="space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={item.href} href={item.href}>
                                <Button
                                    variant={isActive ? "secondary" : "ghost"}
                                    className={cn(
                                        "w-full justify-start gap-3 mb-1 transition-all duration-200",
                                        isActive
                                            ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm border border-sidebar-border/50"
                                            : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50"
                                    )}
                                >
                                    <item.icon size={18} className={cn(isActive ? "text-foreground" : "text-muted-foreground")} />
                                    {item.label}
                                </Button>
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <div className="absolute bottom-4 left-0 w-full px-4">
                <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10" onClick={handleLogout}>
                    <LogOut size={18} />
                    Logout
                </Button>
            </div>
        </div>
    );
}
