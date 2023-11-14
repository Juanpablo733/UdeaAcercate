import gql from "graphql-tag";

const GET_PROFILE = gql`
  query Profile($userId: String!) {
    profile(userId: $userId) {
      faculty
      career
      type
      campus
      user {
        name
        email
        emailVerified
        image
      }
      description
      hobbies
      socialLinks
    }
  }
`;

export { GET_PROFILE }