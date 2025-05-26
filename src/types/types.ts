// consider replacing enums with object literal (see: erasableSyntaxOnly)
export enum UserChannel {
    Direct = 'Direct',
    Employer = 'Employer',
}

export type User = {
    channel: UserChannel;
    // more properties here
}

export enum ISAProduct {
    ISA_1 = 'ISA_1',
    ISA_2 = 'ISA_2',
    ISA_3 = 'ISA_3',
    ISA_4 = 'ISA_4',
}

export type ISAItem = {
    product: ISAProduct;
    availability: UserChannel[];
    rate: number;
    term: number;
}

export type APIResponse<T> = {
    loading?: boolean;
    error?: boolean;
    data: T
}
