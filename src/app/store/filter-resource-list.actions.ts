import {Action} from "@ngrx/store";

export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_BY_QBANK = "FILTER_BY_QBANK";
export const FILTER_BY_STATUS = "FILTER_BY_STATUS";

export class FilterByType implements Action {
    readonly type = FILTER_BY_TYPE;

    constructor(public typeID: number) {}

}

export class FilterByQbank implements Action {
    readonly type = FILTER_BY_QBANK;

    constructor(public typeID:number, public qbankID:number) {

    }

}

export class FilterByStatus implements Action {
    readonly type = FILTER_BY_STATUS

    constructor(public statusID:number,public typeID:number,public qbankID:number) {

    }

}

export type FilterActions = FilterByQbank | FilterByType | FilterByStatus;