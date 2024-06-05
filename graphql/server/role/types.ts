import gql from "graphql-tag";

const roleTypeDefs = gql`
    type Role {
        userId: String
        role: String
    }
    type Query {
        isUserAdmin(userId: String!): Boolean
        getUsersByMail(email: String!): [User]
    }
    type Mutation {
        grantAdminToUser(userId: String!, adminUserId: String!): Boolean
    }
`

export { roleTypeDefs }