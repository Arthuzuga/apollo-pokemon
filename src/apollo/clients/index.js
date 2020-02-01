import ApolloClient from 'apollo-boost';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-first',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'cache-first',
    errorPolicy: 'all'
  },
  mutate: {
    errorPolicy: 'all'
  }
};

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/',
  defaultOptions: defaultOptions
});

export default client;
