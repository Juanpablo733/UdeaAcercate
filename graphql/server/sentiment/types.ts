import gql from "graphql-tag";

const sentimentTypeDefs = gql`
    type SentimentCount {
        positive: Int
        negative: Int
        neutral: Int
    }
    type ConfidenceAverage {
        positive: Float
        negative: Float
        neutral: Float
    }
    type Query {
        commentSentimentCount: SentimentCount
        commentSentimentConfidenceAverage: ConfidenceAverage
    }
    type Mutation {
        classifyCommentSentiment(commentId:String!): Boolean
    }
`

export { sentimentTypeDefs }