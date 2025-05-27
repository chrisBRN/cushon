import {
	type ISAItem,
	ISAProduct,
	UserChannel,
} from '../../../../types/types.ts'
import {
	filterDirectUserChannelISAs,
	filterEmployerChannelISAs,
} from '../filter.ts'

describe('filterDirectUserChannelISAs', () => {
	it('should return true if availability includes UserChannel.Direct', () => {
		const item: ISAItem = {
			product: ISAProduct.ISA_1,
			availability: [UserChannel.Direct, UserChannel.Employer],
			rate: 0.05,
			term: 12,
		}
		expect(filterDirectUserChannelISAs(item)).toBe(true)
	})

	it('should return false if availability does not include UserChannel.Direct', () => {
		const item: ISAItem = {
			product: ISAProduct.ISA_2,
			availability: [UserChannel.Employer],
			rate: 0.04,
			term: 24,
		}
		expect(filterDirectUserChannelISAs(item)).toBe(false)
	})

	it('should return false if availability is empty', () => {
		const item: ISAItem = {
			product: ISAProduct.ISA_3,
			availability: [],
			rate: 0.03,
			term: 6,
		}
		expect(filterDirectUserChannelISAs(item)).toBe(false)
	})
})

describe('filterEmployerChannelISAs', () => {
	it('should return true if availability includes UserChannel.Employer', () => {
		const item: ISAItem = {
			product: ISAProduct.ISA_1,
			availability: [UserChannel.Direct, UserChannel.Employer],
			rate: 0.05,
			term: 12,
		}
		expect(filterEmployerChannelISAs(item)).toBe(true)
	})

	it('should return false if availability does not include UserChannel.Employer', () => {
		const item: ISAItem = {
			product: ISAProduct.ISA_2,
			availability: [UserChannel.Direct],
			rate: 0.04,
			term: 24,
		}
		expect(filterEmployerChannelISAs(item)).toBe(false)
	})

	it('should return false if availability is empty', () => {
		const item: ISAItem = {
			product: ISAProduct.ISA_3,
			availability: [],
			rate: 0.03,
			term: 6,
		}
		expect(filterEmployerChannelISAs(item)).toBe(false)
	})
})
