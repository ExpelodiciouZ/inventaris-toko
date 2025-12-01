import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground p-8">
            <div className="max-w-3xl mx-auto space-y-8">
                <Link href="/">
                    <Button variant="ghost" className="mb-4 pl-0 hover:pl-2 transition-all">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Button>
                </Link>

                <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
                <p className="text-muted-foreground">Last updated: December 01, 2025</p>

                <div className="prose prose-invert max-w-none space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            By accessing our website at InventarisTokoATK by Jeffry UNDIRA, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Permission is granted to temporarily download one copy of the materials (information or software) on InventarisTokoATK's website for personal, non-commercial transitory viewing only.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The materials on InventarisTokoATK's website are provided on an 'as is' basis. InventarisTokoATK makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
