
 export interface FormMaster {
    FormID: number;
    ParentFormID?: number | null;
    FormName: string;
    FormURL: string;
    Description?: string | null;
    CreatedDate?: Date | null;
    CreatedBy: number;
    UpdatedDate?: Date | null;
    UpdatedBy: number;
    IsActive: boolean;
}
