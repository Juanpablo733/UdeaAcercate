import { gql } from "graphql-tag";

const GET_USERS = gql`
    query users{
        users {
            id
            name
            email
            emailVerified
            image
        }
}
`;

export { GET_USERS }