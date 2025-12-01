import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function SupportPage() {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Support</h1>
                <p className="text-muted-foreground">Need help? We're here for you.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="glass-card">
                    <CardHeader>
                        <CardTitle>Contact Us</CardTitle>
                        <CardDescription>Send us a message and we'll get back to you.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" placeholder="I need help with..." className="bg-background/50" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Describe your issue..." className="min-h-[120px] bg-background/50" />
                            </div>
                            <Button className="w-full">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle>Other Ways to Connect</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-sm text-muted-foreground">support@inventaristokoatk.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <p className="text-sm text-muted-foreground">+62 812 3456 7890</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <p className="font-medium">Live Chat</p>
                                    <p className="text-sm text-muted-foreground">Available Mon-Fri, 9am - 5pm</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle>FAQ</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-medium mb-1">How do I reset my password?</h4>
                                <p className="text-sm text-muted-foreground">You can reset your password in the Settings page or use the Forgot Password link on the login screen.</p>
                            </div>
                            <div>
                                <h4 className="font-medium mb-1">Can I export my data?</h4>
                                <p className="text-sm text-muted-foreground">Currently, data export is available upon request. Please contact support.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
