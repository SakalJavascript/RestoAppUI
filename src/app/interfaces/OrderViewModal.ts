export interface KitchenOrderDetailViewModal {
    KitchenOrdersId: string;
    MenuName: string;
    Quantity: number;
    Price: number;
    Total: number; // You might need to compute this in your code
}

export interface OrderViewModal {
    OrderId: number;
    TableID: number | null;
    OrderType: number;
    OrderDate: Date;
    TotalAmount: number;
    IsPaid: boolean | null;
    KitchenOrders: KitchenOrderDetailViewModal[];
}

export interface KichenOrderViewModal {
    MenuName:string,
    Quantity:number
}
