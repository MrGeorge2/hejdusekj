import { GraphQLClient } from './graphqlClient';

/*
export async function fetchLocalizations() {
    const client = GraphQLClient.getClient();
    const result = await client.query({
        query: `
            query {
                localizations {
                    id
                    key
                    value
                }
            }
        `,
    });
    return result.data.localizations;
}
*/