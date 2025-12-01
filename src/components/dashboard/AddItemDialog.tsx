"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Loader2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export function AddItemDialog() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        stock: "",
        price: "",
        supplier: "",
        description: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSelectChange = (value: string, field: string) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const { error } = await supabase.from('items').insert([
                {
                    name: formData.name,
                    category: formData.category,
                    stock: parseInt(formData.stock),
                    price: parseInt(formData.price),
                    supplier: formData.supplier,
                    description: formData.description,
                    status: parseInt(formData.stock) > 0 ? 'In Stock' : 'Out of Stock' // Simple logic
                }
            ]);

            if (error) throw error;

            setOpen(false);
            setFormData({
                name: "",
                category: "",
                stock: "",
                price: "",
                supplier: "",
                description: ""
            });
            window.location.reload(); // Refresh to show new item
        } catch (error: any) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="gap-2">
                    <Plus size={16} /> Add Item
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] glass-card">
                <DialogHeader>
                    <DialogTitle>Add New Item</DialogTitle>
                    <DialogDescription>
                        Add a new item to your inventory here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value={formData.name} onChange={handleChange} placeholder="Item name" className="col-span-3 bg-background/50" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="category" className="text-right">
                            Category
                        </Label>
                        <Select onValueChange={(val) => handleSelectChange(val, 'category')}>
                            <SelectTrigger className="col-span-3 bg-background/50">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Electronics">Electronics</SelectItem>
                                <SelectItem value="Accessories">Accessories</SelectItem>
                                <SelectItem value="Monitors">Monitors</SelectItem>
                                <SelectItem value="Keyboards">Keyboards</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="stock" className="text-right">
                            Stock
                        </Label>
                        <Input id="stock" type="number" value={formData.stock} onChange={handleChange} className="col-span-3 bg-background/50" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="price" className="text-right">
                            Price
                        </Label>
                        <Input id="price" type="number" value={formData.price} onChange={handleChange} className="col-span-3 bg-background/50" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="supplier" className="text-right">
                            Supplier
                        </Label>
                        <Select onValueChange={(val) => handleSelectChange(val, 'supplier')}>
                            <SelectTrigger className="col-span-3 bg-background/50">
                                <SelectValue placeholder="Select supplier" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Apple Indonesia">Apple Indonesia</SelectItem>
                                <SelectItem value="Samsung Electronics">Samsung Electronics</SelectItem>
                                <SelectItem value="Logitech Official">Logitech Official</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Desc
                        </Label>
                        <Textarea id="description" value={formData.description} onChange={handleChange} className="col-span-3 bg-background/50" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit} disabled={loading}>
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
