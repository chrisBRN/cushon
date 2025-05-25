// TODO think of a better name / replace with object literal (see: erasableSyntaxOnly)
export enum UserType {
    Direct = 'Direct',
    Employer = 'Employer',
}

export type ISAItem = {
    name: string;
    availability: UserType[];
    rate: number;
    term: number;
}
