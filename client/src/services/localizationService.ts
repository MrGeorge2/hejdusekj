import { Localization } from '../store/localization/types';

const localizationQuery = `
    query GetLocalizations($languageCode: String!, $after: String) {
        localizations(languageCode: $languageCode, after: $after) {
            pageInfo {
                hasNextPage
                endCursor
            }
            nodes{
                key
                value
            }
        }
    }
`;

/**
 * Fetches localizations from the server.
 * @param languageCode 
 */
export async function* fetchLocalizationsAsync(languageCode: string): AsyncGenerator<Readonly<Localization>, void, void> {

    let hasNextPage = true;
    let after: string | null = null;

    while (hasNextPage) {
        const fetchedLocalizations: any = await fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: localizationQuery,
                variables: { languageCode: languageCode, after: after },
            })
        }).then(r => r.json());

        // TODO better logging
        if (fetchedLocalizations.errors){
            console.log(fetchedLocalizations.errors);
            throw new Error(fetchedLocalizations.errors[0].message);
        }

        hasNextPage = fetchedLocalizations.data.localizations.pageInfo.hasNextPage;
        after = fetchedLocalizations.data.localizations.pageInfo.endCursor;

        for (const localization of fetchedLocalizations.data.localizations.nodes) {
            yield {
                key: localization.key,
                value: localization.value,
                language: languageCode,
            }
        }
    }
}