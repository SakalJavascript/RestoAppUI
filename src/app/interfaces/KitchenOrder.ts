export interface KitchenOrder {
    ID: number;
    TableID: number | null;
    OrderID: number | null;
    OrderDate: Date | null;
    CreatedDate: Date | null;
    CreatedBy: number;
    UpdatedDate: Date | null;
    UpdatedBy: number;
    IsDeleted: boolean | null;
}
