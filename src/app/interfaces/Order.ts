import { KitchenOrderDetail } from "./KitchenOrderDetail"

export interface Order
{
    TableID:number,
    OrderID: number,
    TotalAmount: number,
    OrderType: number,
    OrderDetails: KitchenOrderDetail[] | undefined
}


