import { type ISAItem, ISAProduct, UserChannel } from '../types/types.ts';

const mockISAdata: ISAItem[] = [
    {
        product: ISAProduct.ISA_1,
        availability: [UserChannel.Direct],
        rate: 3,
        term: 12,
    },
    {
        // multi-channel example
        product: ISAProduct.ISA_2,
        availability: [UserChannel.Direct, UserChannel.Employer],
        rate: 3,
        term: 0,
    },
    {
        product: ISAProduct.ISA_3,
        availability: [UserChannel.Employer],
        rate: 3,
        term: 0,
    },
    {
        product: ISAProduct.ISA_4,
        availability: [UserChannel.Direct],
        rate: 3,
        term: 0,
    },
    // malformed example, (filtered by validation)
    {
        product: 'not an isa' as ISAProduct,
    } as ISAItem
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
