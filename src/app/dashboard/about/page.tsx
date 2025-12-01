import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Box, Github, Globe, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl font-bold tracking-tight">About InventarisTokoATK</h1>
                <p className="text-muted-foreground">The modern solution for inventory management.</p>
            </div>

            <Card className="glass-card border-primary/20 shadow-[0_0_30px_rgba(0,0,0,0.1)]">
                <CardHeader className="text-center pb-2">
                    <div className="mx-auto w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-primary mb-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <Box size={32} />
                    </div>
                    <CardTitle className="text-2xl">InventarisTokoATK</CardTitle>
                    <CardDescription>Version 1.0.0</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 text-center">
                    <p className="leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                        InventarisTokoATK by Jeffry UNDIRA is designed to streamline your inventory tracking with a premium, user-friendly interface.
                        Built with the latest web technologies including Next.js 14, Supabase, and Tailwind CSS, it offers real-time data synchronization, secure authentication, and a beautiful "Linear-style" aesthetic.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2">
                        <Badge variant="secondary" className="px-3 py-1">Next.js 14</Badge>
                        <Badge variant="secondary" className="px-3 py-1">TypeScript</Badge>
                        <Badge variant="secondary" className="px-3 py-1">Tailwind CSS</Badge>
                        <Badge variant="secondary" className="px-3 py-1">Supabase</Badge>
                        <Badge variant="secondary" className="px-3 py-1">Framer Motion</Badge>
                    </div>

                    <div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Globe size={16} />
                            <span>www.inventaristokoatk.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Github size={16} />
                            <span>github.com/jeffryundira/inventaristokoatk</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
                Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Antigravity
            </div>
        </div>
    );
}
