    import { gql } from 'graphql-tag';

    const informationTypeDefs = gql`
    type Information {
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
        comments:    [Comment]
        hashtags:    [String]
    }
    type Mutation{
        createInfo(title: String!, description: String!, date: DateTime!, 
                image: String!, tag: String!, authorId: String!): Information
        deleteInformationByOwner(infoId: String!, ownerId: String!): Boolean
    }
`

export { informationTypeDefs }