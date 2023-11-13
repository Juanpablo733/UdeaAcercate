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

const GET_USER_BY_EMAIL = gql`
    query Query($email: String!) {
        user(email: $email) {
            id
            name
            email
            emailVerified
            image
        } 
    }
`

export { GET_USERS, GET_USER_BY_EMAIL }