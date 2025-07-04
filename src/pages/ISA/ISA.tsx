import styles from './ISA.module.css'
import CardList from '../../components/CardList/CardList.tsx'
import { UserChannel } from '../../types/types.ts'
import useUser from '../../hooks/useUser.tsx'
import useISA from '../../hooks/useISA.tsx'
import { parseAPIData } from './helpers/parse.ts'

function ISA() {
	const { data: user, loading: userLoading } = useUser(UserChannel.Direct)
	const { data: ISAs, loading: isaLoading } = useISA()

	const loading = userLoading || isaLoading

	if (loading) {
		return (
			<main className={styles.content}>
				<p>...Loading</p>
			</main>
		)
	}

	return (
		<main className={styles.content}>
			<h3 className={styles.title}>
				Deposit in cash or invest for potentially higher returns
			</h3>
			<p>
				With Cushon you can set up as many different ISA pots as you
				like (they're all held in one big ISA behind the scenes).
			</p>
			<div>
				<p>
					<span>
						Looking for the Cushon products provided by your
						employer? find them{' '}
					</span>
					<a
						className={styles.link}
						href="https://www.cushon.co.uk/isa"
					>
						here...
					</a>
				</p>
			</div>
			<CardList data={parseAPIData(user, ISAs)} />
		</main>
	)
}

export default ISA
