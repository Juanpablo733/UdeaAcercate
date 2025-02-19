import { gql } from 'graphql-tag';

const informationTypeDefs = gql`
    type Information {
        id: String
        title: String
        description: String
        date:        DateTime
        minutes:     String
        hours:       String
        day:        String
        month:      String
        year:       String
        image:       String
        tag:         String
        official:   Boolean
        comments:    [Comment]
        hashtags:    [String]
        author: User
    }
    type Mutation{
        createInfo(title: String!, description: String!, 
                image: String!, authorId: String!): Information
        deleteInformationByOwner(infoId: String!, ownerId: String!): Boolean
    }
    type Query{
        notices:[Information]
        noticeById(infoId: String!):Information
    }
`

export { informationTypeDefs }