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
`

export { informationTypeDefs }