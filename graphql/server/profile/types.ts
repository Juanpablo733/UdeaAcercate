import { gql } from 'graphql-tag';

const profileTypeDefs = gql`
    type Profile {
        faculty: String
        career: String
        type:   String
        campus: String
        user: User
        description: String
        hobbies: String
        socialLinks: [String]
    }
    type Query {
        profile(userId:String!): Profile
    }
    type Mutation {
        createProfile(userId:String!, faculty: String, career: String, type:   String
            campus: String, description: String, hobbies: String, socialLinks: [String]): Profile
        updateProfile(userId:String!, faculty: String, career: String, type:   String
            campus: String, description: String, hobbies: String, socialLinks: [String]): Profile
    }
`

export { profileTypeDefs }