"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/lib/supabase";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function SettingsPage() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const { theme, setTheme } = useTheme();
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                if (user.email) setUserEmail(user.email);
                setUserId(user.id);

                // Load settings for this specific user
                const savedNotifications = localStorage.getItem(`emailNotifications_${user.id}`);
                if (savedNotifications !== null) {
                    setEmailNotifications(savedNotifications === "true");
                }
            }
        };
        getUser();
    }, []);

    const handleNotificationChange = (checked: boolean) => {
        setEmailNotifications(checked);
        if (userId) {
            localStorage.setItem(`emailNotifications_${userId}`, String(checked));
        }
    };

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);
        setError(null);

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const { error } = await supabase.auth.updateUser({
                password: newPassword
            });

            if (error) throw error;

            setMessage("Password updated successfully");
            setNewPassword("");
            setConfirmPassword("");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">Manage your account and application preferences.</p>
            </div>

            <div className="grid gap-6">
                <Card className="glass-card">
                    <CardHeader>
                        <CardTitle>Profile</CardTitle>
                        <CardDescription>Your account information.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" value={userEmail} disabled className="bg-background/50" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass-card">
                    <CardHeader>
                        <CardTitle>Security</CardTitle>
                        <CardDescription>Update your password.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleChangePassword} className="space-y-4">
                            {message && (
                                <div className="flex items-center gap-2 p-3 text-sm text-green-500 bg-green-500/10 border border-green-500/20 rounded-md">
                                    <CheckCircle2 size={16} />
                                    {message}
                                </div>
                            )}
                            {error && (
                                <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
                                    {error}
                                </div>
                            )}
                            <div className="grid gap-2">
                                <Label htmlFor="new-password">New Password</Label>
                                <Input
                                    id="new-password"
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                    className="bg-background/50"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <Input
                                    id="confirm-password"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    className="bg-background/50"
                                />
                            </div>
                            <Button type="submit" disabled={loading}>
                                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                Update Password
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                <Card className="glass-card">
                    <CardHeader>
                        <CardTitle>Preferences</CardTitle>
                        <CardDescription>Customize your dashboard experience.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Dark Mode</Label>
                                <p className="text-sm text-muted-foreground">Enable dark mode for the dashboard.</p>
                            </div>
                            <Switch
                                checked={theme === "dark"}
                                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Email Notifications</Label>
                                <p className="text-sm text-muted-foreground">Receive emails about low stock alerts.</p>
                            </div>
                            <Switch
                                checked={emailNotifications}
                                onCheckedChange={handleNotificationChange}
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
