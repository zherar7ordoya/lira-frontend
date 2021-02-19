import React from "react";
import ReactDom from "react-dom";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./app";

const client = new ApolloClient({
  uri: "https://lira-backend.herokuapp.com/graphql",
  cache: new InMemoryCache()
});

ReactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
