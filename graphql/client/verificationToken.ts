import gql from "graphql-tag";

const GENERATE_VERIFICATION_TOKEN = gql`mutation GenerateVerificationToken($userId: String!) {
    generateVerificationToken(userId: $userId) {
      identifier
      token
      expires
    }
  }
`
const VERIFY_TOKEN = gql`
    mutation VerifyToken($identifier: String!, $token: String!) {
        verifyToken(identifier: $identifier, token: $token)
    }
`

export { GENERATE_VERIFICATION_TOKEN, VERIFY_TOKEN }