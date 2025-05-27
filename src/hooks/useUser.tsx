import { useCallback, useEffect, useState } from 'react'
import { type APIResponse, type User, UserChannel } from '../types/types.ts'
import { userAPI } from '../api/user.ts'

function useUser(
	_channel: UserChannel /* for mocking */
): APIResponse<User | undefined> {
	const [user, setUser] = useState<User | undefined>()
	const [loading, setLoading] = useState<boolean>(false)

	// Note: this is not the latest way to handle this
	//  we should use 'use', but in the interest of speed this will do
	const fetchUser = useCallback(async () => {
		setLoading(true)
		// Note: typically would want a lazy load, or to have call triggered by callee rather than an effect on mount
		const user = await userAPI.get(_channel)
		setUser(user)
		setLoading(false)
	}, [])

	useEffect(() => {
		fetchUser()
	}, [fetchUser])

	return {
		data: user,
		loading,
		// expose error here
	}
}

export default useUser
