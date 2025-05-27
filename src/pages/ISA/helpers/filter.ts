import { type ISAItem, UserChannel } from '../../../types/types.ts'

export function filterDirectUserChannelISAs(item: ISAItem) {
	return item.availability.includes(UserChannel.Direct)
}

export function filterEmployerChannelISAs(item: ISAItem) {
	return item.availability.includes(UserChannel.Employer)
}
