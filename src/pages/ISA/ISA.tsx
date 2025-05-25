import styles from './ISA.module.css';
import CardList from '../../components/CardList/CardList.tsx';
import { type ISAItem, type ISAListItem, type User, UserChannel } from '../../types/types.ts';
import useUser from '../../hooks/useUser.tsx';
import useISA from '../../hooks/useIsa.tsx';
import { isaAPIItemToISAListItem } from './helpers/transform.tsx';
import { filterDirectUserChannelISAs, filterEmployerChannelISAs } from './helpers/filter.ts';
import { validate } from './helpers/validate.ts';



const parseAPIData = (user: User | undefined, data: ISAItem[] | undefined): ISAListItem[] => {
    if (!user) {
        // not technically possible as parseAPIData won't be called if we are not 'loading'
        // in a 'real' application, we would need to account for missing data though.
        return [];
    }

    const validISAs = validate(data) || []; // TODO handle error / missing data here

    console.log(validISAs);

    const filterFunction = user.channel === UserChannel.Direct
                           ? filterDirectUserChannelISAs
                           : filterEmployerChannelISAs;

    return validISAs.filter(filterFunction).map(isaAPIItemToISAListItem);
};

function ISA() {
    const { data: user, loading: userLoading } = useUser(UserChannel.Direct);
    const { data: ISAs, loading: isaLoading } = useISA();

    const loading = userLoading || isaLoading;

    if (loading) {
        return (
            <main className={styles.content}>
                <p>...Loading</p>
            </main>
        );
    }

    return (
        <main className={styles.content}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            <CardList data={parseAPIData(user, ISAs)}/>
        </main>
    );
}

export default ISA;
