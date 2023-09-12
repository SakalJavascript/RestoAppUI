export interface Menu {
    ID: number;
    MenuName: string;
    Description: string | null;
    Price: number;
    CategoryID: number;
    CreatedDate: Date | null;
    CreatedBy: number;
    UpdatedDate: Date | null;
    UpdatedBy: number;
    IsDeleted: boolean | null;
    Qantity:number; 
}
