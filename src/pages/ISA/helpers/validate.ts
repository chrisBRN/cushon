import { type ISAItem, UserChannel } from '../../../types/types.ts';

// a stub function that checks its input conforms to the expected type
// with more time, I would opt for a proper schema validation library like zod / yup
// Note: the current implementation returns all valid items,
//  we could alternatively return an error (with details) or nothing at all,
//  the right choice here is up for debate but for the given exercise I've opted for simplicity
export function validate(input: ISAItem[] | undefined) {

    if (!input || !Array.isArray(input)) {
        return undefined;
    }

    return input.filter((item) => {

        if (!item.name || typeof item.name !== 'string') {
            return undefined;
        }

        if (!item.term === undefined || !item.term === null || typeof item.term !== 'number') {
            return undefined;
        }

        if (!item.rate === undefined || !item.rate === null || typeof item.rate !== 'number') {
            return undefined;
        }

        if (!item.availability.length) {
            return undefined;
        }

        const channelsAreValid = item.availability.every((channel) => [UserChannel.Employer, UserChannel.Direct].includes(channel));

        if (!channelsAreValid) {
            return undefined;
        }

        return item;
    }).filter(Boolean);
}
