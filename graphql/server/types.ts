import { gql } from 'graphql-tag';

const typeDefs = gql`
    type User {
        id: ID
        name:          String
        email:         String
        emailVerified: String
        image:         String
    }  

    type Query {
        users: [User]
        user(email:String!): User
    }
    
    type Mutation {
        createUser(name:String!, email:String!, image:String!, emailVerified:String): User
    }
`;

export { typeDefs }