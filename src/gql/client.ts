import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  Observable,
} from "@apollo/client";
import * as SecureStore from "expo-secure-store";

const getToken = async () => {
  const token = await SecureStore.getItemAsync("jwt");
  console.log("token", token);
  return await SecureStore.getItemAsync("jwt");
};

const authLink = new ApolloLink((operation, forward) => {
  return new Observable((observer) => {
    getToken()
      .then((token) => {
        operation.setContext({
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        });
      })
      .then(() => {
        const subscriber = {
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        };

        forward(operation).subscribe(subscriber);
      })
      .catch((error) => {
        observer.error(error);
      });
  });
});

const httpLink = new HttpLink({
  uri: "https://achive-be-lyhx67dq6q-ey.a.run.app/graphql",
});

const link = authLink.concat(httpLink);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
