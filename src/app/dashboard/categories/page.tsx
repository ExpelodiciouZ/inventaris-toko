"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Loader2, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { AddCategoryDialog } from "@/components/dashboard/AddCategoryDialog";

type Category = {
    id: string;
    name: string;
    description: string;
    item_count?: number; // Optional, if we want to count items later
};

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchCategories = useCallback(async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('categories')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching categories:', error);
        } else {
            setCategories(data || []);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
                    <p className="text-muted-foreground">Manage item categories.</p>
                </div>
                <AddCategoryDialog onSuccess={fetchCategories} />
            </div>

            {loading ? (
                <div className="flex justify-center p-8"><Loader2 className="animate-spin text-primary" /></div>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {categories.length === 0 ? (
                        <div className="col-span-full text-center py-12 text-muted-foreground">
                            No categories found. Add one to get started.
                        </div>
                    ) : (
                        categories.map((category) => (
                            <Card key={category.id} className="glass-card hover:border-primary/50 transition-colors cursor-pointer">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Package size={18} className="text-primary" />
                                        {category.name}
                                    </CardTitle>
                                    <CardDescription>{category.description || "No description"}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
