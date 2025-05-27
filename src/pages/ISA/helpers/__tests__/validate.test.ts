import { validate } from '../validate.ts'
import {
	type ISAItem,
	ISAProduct,
	UserChannel,
} from '../../../../types/types.ts'

const mockValidItem: ISAItem = {
	product: ISAProduct.ISA_1,
	availability: [UserChannel.Direct],
	rate: 1.5,
	term: 12,
}

describe('validate', () => {
	test('should return undefined if input is missing', () => {
		expect(validate(undefined as any)).toBeUndefined()
	})

	test('should return undefined if input is not an array', () => {
		expect(validate({} as any)).toBeUndefined()
	})

	test('should return an empty array if input is an empty array', () => {
		expect(validate([])).toEqual([])
	})

	test('should return all valid items if all input items are valid', () => {
		const validItems = [mockValidItem, mockValidItem]
		expect(validate(validItems)).toEqual(validItems)
	})

	// adding more tests here feels a bit redundant for this exercise
	// since these functions largely exist to mock an expected data-flow rather than provide 'correct' behaviour
})
