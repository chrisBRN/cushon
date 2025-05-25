import type { ISAItem, ISAListItem } from '../../types/types';

export function isaAPIItemToISAListItem(item: ISAItem): ISAListItem {
    return {
        content: (
            <>
                <p>{item.name}</p>
                <p>{item.availability}</p>
                <p>{item.rate}</p>
                <p>{item.term}</p>
            </>
        )
    };
}
