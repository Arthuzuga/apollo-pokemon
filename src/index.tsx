import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import { App } from './App';

import client from './apollo/clients';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
