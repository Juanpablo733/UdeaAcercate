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

const CREATE_PROFILE = gql`
mutation Mutation($userId: String!, $faculty: String, $career: String, $type: String, $campus: String, $description: String, $hobbies: String, $socialLinks: [String]) {
  createProfile(userId: $userId, faculty: $faculty, career: $career, type: $type, campus: $campus, description: $description, hobbies: $hobbies, socialLinks: $socialLinks) {
    user {
      id
      email
    }
  }
}
`;


export { GET_PROFILE, CREATE_PROFILE }