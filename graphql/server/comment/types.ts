import { gql } from 'graphql-tag';

const commentTypeDefs = gql`
    type Comment {
        id: ID
        text: String
        dateTime: DateTime 
        user:     User     
        event:    Event    
    }
    type Query {
        allComments(startDate:DateTime, endDate:DateTime): [String]
    }
    type Mutation {
        createComment(userId:String!, eventId:String!, text:String!): Comment
        deleteCommentByOwner(commentId: String!, ownerId: String!): Boolean
    }
`

export { commentTypeDefs }