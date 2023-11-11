import gql from "graphql-tag";

const GENERATE_VERIFICATION_TOKEN = gql`
  mutation Mutation($userId: String!) {
    generateEmailToken(userId: $userId) {
      identifier
      token
      expires
    }
  }
`
const VERIFY_TOKEN = gql`
    mutation VerifyEmailToken($identifier: String!, $token: String!) {
      verifyEmailToken(identifier: $identifier, token: $token)
    }
`

export { GENERATE_VERIFICATION_TOKEN, VERIFY_TOKEN }