"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { InventoryItem } from "./InventoryTable";

interface EditItemDialogProps {
    item: InventoryItem | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess: () => void;
}

export function EditItemDialog({ item, open, onOpenChange, onSuccess }: EditItemDialogProps) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        stock: "",
        price: "",
        supplier: "",
        description: "",
        status: "In Stock"
    });

    useEffect(() => {
        if (item) {
            setFormData({
                name: item.name,
                category: item.category,
                stock: item.stock.toString(),
                price: item.price.toString(),
                supplier: item.supplier,
                description: "", // Description might not be in the table view, we might need to fetch it or just leave it blank/optional
                status: item.status
            });
        }
    }, [item]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!item) return;

        setLoading(true);

        try {
            const stockValue = parseInt(formData.stock);
            const status = stockValue === 0 ? "Out of Stock" : stockValue < 10 ? "Low Stock" : "In Stock";

            const { error } = await supabase
                .from('items')
                .update({
                    name: formData.name,
                    category: formData.category,
                    stock: stockValue,
                    price: parseFloat(formData.price),
                    supplier: formData.supplier,
                    description: formData.description,
                    status: status
                })
                .eq('id', item.id);

            if (error) throw error;

            onSuccess();
            onOpenChange(false);
        } catch (error: any) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px] glass-card">
                <DialogHeader>
                    <DialogTitle>Edit Item</DialogTitle>
                    <DialogDescription>
                        Make changes to the item here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="col-span-3 bg-background/50"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="category" className="text-right">
                                Category
                            </Label>
                            <Select
                                name="category"
                                value={formData.category}
                                onValueChange={(value) => handleSelectChange("category", value)}
                            >
                                <SelectTrigger className="col-span-3 bg-background/50">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Electronics">Electronics</SelectItem>
                                    <SelectItem value="Furniture">Furniture</SelectItem>
                                    <SelectItem value="Office Supplies">Office Supplies</SelectItem>
                                    <SelectItem value="Accessories">Accessories</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="stock" className="text-right">
                                Stock
                            </Label>
                            <Input
                                id="stock"
                                name="stock"
                                type="number"
                                value={formData.stock}
                                onChange={handleChange}
                                className="col-span-3 bg-background/50"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                Price
                            </Label>
                            <Input
                                id="price"
                                name="price"
                                type="number"
                                value={formData.price}
                                onChange={handleChange}
                                className="col-span-3 bg-background/50"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="supplier" className="text-right">
                                Supplier
                            </Label>
                            <Select
                                name="supplier"
                                value={formData.supplier}
                                onValueChange={(value) => handleSelectChange("supplier", value)}
                            >
                                <SelectTrigger className="col-span-3 bg-background/50">
                                    <SelectValue placeholder="Select supplier" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Apple Indonesia">Apple Indonesia</SelectItem>
                                    <SelectItem value="Logitech Official">Logitech Official</SelectItem>
                                    <SelectItem value="IKEA Business">IKEA Business</SelectItem>
                                    <SelectItem value="PaperOne Inc">PaperOne Inc</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Desc
                            </Label>
                            <Textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="col-span-3 bg-background/50"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={loading}>
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                            Save changes
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
