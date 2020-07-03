require("dotenv").config();
const gql = require("graphql-tag");
const ApolloClient = require("apollo-boost").ApolloClient;
const fetch = require("cross-fetch/polyfill").fetch;
const createHttpLink = require("apollo-link-http").createHttpLink;
const InMemoryCache = require("apollo-cache-inmemory").InMemoryCache;

const getData = async () => {
  const client = new ApolloClient({
    link: createHttpLink({
      uri: process.env.GRAPHQL_ENDPOINT,
      fetch: fetch,
    }),
    cache: new InMemoryCache(),
  });

  const data = await client.mutate({
    mutation: gql`
      query {
        tasks {
          id
          name
          description
        }
      }
    `,
  });
  return data;
};

exports.getData = getData;
