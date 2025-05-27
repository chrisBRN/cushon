import { type ISAItem, type User, UserChannel } from '../../../types/types.ts'
import { validate } from './validate.ts'
import {
	filterDirectUserChannelISAs,
	filterEmployerChannelISAs,
} from './filter.ts'

export function parseAPIData(
	user: User | undefined,
	data: ISAItem[] | undefined
): ISAItem[] {
	if (!user) {
		// not technically possible as parseAPIData won't be called if we are not 'loading'
		// in a 'real' application, we would need to account for missing data though.
		return []
	}

	const validISAs = validate(data) || [] // TODO handle error / missing data here

	const filterFunction =
		user.channel === UserChannel.Direct
			? filterDirectUserChannelISAs
			: filterEmployerChannelISAs

	return validISAs.filter(filterFunction)
}
