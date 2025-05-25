import { type ISAItem, UserChannel } from '../types/types.ts';

const mockISAdata: ISAItem[] = [
    {
        name: 'ISA 1',
        availability: [UserChannel.Direct],
        rate: 3,
        term: 12,
    },
    {
        // multi-channel example
        name: 'ISA 2',
        availability: [UserChannel.Direct, UserChannel.Employer],
        rate: 3,
        term: 0,
    },
    {
        name: 'ISA 3',
        availability: [UserChannel.Direct],
        rate: 3,
        term: 0,
    },
    {
        name: 'ISA 4',
        availability: [UserChannel.Employer],
        rate: 3,
        term: 0,
    },
    {
        name: 'ISA 5',
        availability: [UserChannel.Direct],
        rate: 3,
        term: 0,
    },
    // malformed example
    // {
    //     name: 'not an isa',
    // } as ISAItem
];

// mock get call with simulated loading
function get(): Promise<ISAItem[]> {
    return new Promise(resolve => {
        setTimeout(() => resolve(mockISAdata), 700);
    });
}

export const isaAPI = {
    get
};
