export enum ValidationType {
    DataNotFound = 1,
    ModalValidation = 2,
    Exception = 3
}

export class ResponseDto<T> {
    IsSuccess: boolean;
    Data: T;
    Errors:{ [key: number]: string};

    constructor() {
        this.IsSuccess = false;
        this.Data = null as any;
        this.Errors = {};
    }
}
