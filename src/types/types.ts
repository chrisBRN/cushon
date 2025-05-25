// consider replacing with object literal (see: erasableSyntaxOnly)
import type { JSX } from 'react';

export enum UserChannel {
    Direct = 'Direct',
    Employer = 'Employer',
}

export type User = {
    channel: UserChannel;
    // more properties here
}

export type ISAItem = {
    name: string;
    availability: UserChannel[];
    rate: number;
    term: number;
}

export type ISAListItem = {
    content: string | JSX.Element | JSX.Element[]
}

export type APIResponse<T> = {
    loading?: boolean;
    error?: boolean;
    data: T
}
