import { InventoryTable } from "@/components/dashboard/InventoryTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AddItemDialog } from "@/components/dashboard/AddItemDialog";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Inventory</h1>
                    <p className="text-muted-foreground">Manage your stock, suppliers, and categories.</p>
                </div>
                <AddItemDialog />
            </div>

            <InventoryTable />
        </div>
    );
}
