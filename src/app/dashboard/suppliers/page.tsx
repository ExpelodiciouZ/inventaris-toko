"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Phone, MapPin, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { AddSupplierDialog } from "@/components/dashboard/AddSupplierDialog";

type Supplier = {
    id: string;
    name: string;
    phone: string;
    address: string;
};

export default function SuppliersPage() {
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchSuppliers = useCallback(async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('suppliers')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching suppliers:', error);
        } else {
            setSuppliers(data || []);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchSuppliers();
    }, [fetchSuppliers]);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Suppliers</h1>
                    <p className="text-muted-foreground">Manage your suppliers and vendors.</p>
                </div>
                <AddSupplierDialog onSuccess={fetchSuppliers} />
            </div>

            {loading ? (
                <div className="flex justify-center p-8"><Loader2 className="animate-spin text-primary" /></div>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {suppliers.length === 0 ? (
                        <div className="col-span-full text-center py-12 text-muted-foreground">
                            No suppliers found. Add one to get started.
                        </div>
                    ) : (
                        suppliers.map((supplier) => (
                            <Card key={supplier.id} className="glass-card hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <CardTitle>{supplier.name}</CardTitle>
                                    <CardDescription className="flex flex-col gap-1 mt-2">
                                        <span className="flex items-center gap-2"><Phone size={14} /> {supplier.phone}</span>
                                        <span className="flex items-center gap-2"><MapPin size={14} /> {supplier.address}</span>
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
