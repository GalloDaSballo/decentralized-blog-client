import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GRAPH_URL, AUTHOR_ADDRESS } from "./constants";
import { Post } from "../types";

const client = new ApolloClient({
    uri: GRAPH_URL,
    cache: new InMemoryCache(),
});

/**
 * Load the first 100 articles
 * @returns
 */
export const getFirst100Posts = async (): Promise<Post[]> => {
    const result = await client.query({
        query: gql`
            query posts($author: String!) {
                posts(
                    orderBy: block
                    orderDirection: desc
                    where: { author: $author }
                ) {
                    id
                    block
                    author
                    title
                    content
                }
            }
        `,
        variables: { author: AUTHOR_ADDRESS },
    });
    return result.data.posts;
};

export const getPost = async (id: string): Promise<Post> => {
    const result = await client.query({
        query: gql`
            query post($id: String!) {
                posts(where: { id: $id }) {
                    id
                    block
                    author
                    title
                    content
                }
            }
        `,
        variables: { id },
    });
    return result.data.posts;
};
