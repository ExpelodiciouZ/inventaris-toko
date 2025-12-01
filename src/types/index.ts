export type Item = {
    id: string;
    name: string;
    category_id: string;
    supplier_id: string;
    stock: number;
    price: number;
    description: string | null;
    created_at: string;
};

export type Category = {
    id: string;
    name: string;
};

export type Supplier = {
    id: string;
    name: string;
    phone: string;
    address: string;
};
