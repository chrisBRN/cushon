import { useCallback, useEffect, useState } from 'react'
import type { APIResponse, ISAItem } from '../types/types.ts'
import { isaAPI } from '../api/isa.ts'

function useISA(
	_hasError: boolean = false
): APIResponse<ISAItem[] | undefined> {
	const [data, setData] = useState<ISAItem[] | undefined>()
	const [loading, setLoading] = useState<boolean>(false)

	// Note: this is not the latest way to handle this
	//  we should use 'use', but in the interest of speed this will do
	const fetchIsaData = useCallback(async () => {
		if (_hasError) {
			return
		}

		setLoading(true)

		// Note: typically would want a lazy load, or to have call triggered by callee rather than an effect on mount
		const data = await isaAPI.get()
		setData(data)
		setLoading(false)
	}, [])

	useEffect(() => {
		fetchIsaData()
	}, [fetchIsaData])

	return {
		data,
		loading,
		error: !loading && _hasError,
	}
}

export default useISA
