function leftPad(value: number) {
    if (value >= 10) {
        return value;
    }

    return `0${value}`;
}

export function toStringByFormatting(source: Date, delimiter = "-") {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth());
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
}

export enum PageStatus {
    Loading = "Loading",
    Failed = "Failed",
    Success = "Success",
}


import { observable } from "mobx";

export class PageViewModel {
    @observable
    status: PageStatus;

    @observable
    errorMessage: string;

    constructor() {
        this.status = PageStatus.Loading;
        this.errorMessage = "";
    }

    setLoading() {
        this.status = PageStatus.Loading;
        this.errorMessage = "";
    }
    setSuccess() {
        this.status = PageStatus.Success;
        this.errorMessage = "";
    }

    setFailed(errorMessage: string) {
        this.status = PageStatus.Failed;
        this.errorMessage = errorMessage;
    }
}
