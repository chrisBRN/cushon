import {type ISAItem, UserType} from "../types/types.ts";

const mockISAdata: ISAItem[] = [
    {
        name: 'ISA 1',
        availability: [UserType.Direct],
        rate: 3,
        term: 12,
    },
    {
        name: 'ISA 2',
        availability: [UserType.Direct, UserType.Employer],
        rate: 3,
        term: 0,
    },
    {
        name: 'ISA 3',
        availability: [UserType.Direct],
        rate: 3,
        term: 0,
    }
    ,
    {
        name: 'ISA 4',
        availability: [UserType.Employer],
        rate: 3,
        term: 0,
    }
    ,
    {
        name: 'ISA 5',
        availability: [UserType.Direct],
        rate: 3,
        term: 0,
    }
]

function get(): Promise<ISAItem[]> {
    // TODO replace with proper api call / GQL / etc
    return new Promise(resolve => {
        setTimeout(() => resolve(mockISAdata), 30);
    });
}

export const isaAPI = {
    get
}
