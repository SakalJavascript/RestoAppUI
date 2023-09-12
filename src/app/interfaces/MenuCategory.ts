export interface MenuCategory {
  ID: number;
  Name: string;
  Description: string | null;
  CreatedDate: Date | null;
  CreatedBy: number;
  UpdatedDate: Date | null;
  UpdatedBy: number;
  IsDeleted: boolean | null;
  ImagesId: number | null;
}
