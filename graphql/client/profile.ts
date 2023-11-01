import gql from "graphql-tag";

const GET_PROFILE = gql`query Profile($userId: String!) {
  profile(userId: $userId) {
    faculty
    career
    type
    campus
    description
    hobbies
    socialLinks
  }
}
`;