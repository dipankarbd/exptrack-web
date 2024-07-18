import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  concat,
  HttpLink,
  ApolloLink,
} from '@apollo/client';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import GlobalStyles from './global.styled';

const httpLink = new HttpLink({ uri: import.meta.env.GRAPHQL_URL });

const authMiddleware = new ApolloLink((operation, forward) => {
  const authToken = localStorage.getItem('auth-token');

  operation.setContext(({ headers = {} }) => {
    return {
      headers: {
        ...headers,
        authorization: authToken ? `Bearer ${authToken}` : '',
      },
    };
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
