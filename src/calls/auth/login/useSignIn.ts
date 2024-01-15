import { useMutation } from "@apollo/client";
import { gql } from "gql/gql";

const SIGN_IN_MUTATION = gql(/* GraphQL */ `
  mutation Mutation($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      username
      email
      password
    }
  }
`);

export const useSignIn = () => {
  const [signInMutation, signInResult] = useMutation(SIGN_IN_MUTATION);
  return { signInMutation, signInResult };
};
