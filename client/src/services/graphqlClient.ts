/*
import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";


  export class GraphQLClient {
    private static client: ApolloClient<any>;


    constructor() {
        const cache = new InMemoryCache();
        GraphQLClient.client = new ApolloClient({
            cache,
            uri: "http://localhost:80/graphql",
        });
    }

    /**
     * Return the ApolloClient instance.
     * @returns 
     */
    /*
    public static getClient() {
        if (!GraphQLClient.client) {
            new GraphQLClient();
        }
        return GraphQLClient.client;
    }
}
*/