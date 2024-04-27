import gql from "graphql-tag";

export const GET_COMMENT_SENTIMENT_COUNT = gql`
    query CommentSentimentCount {
        commentSentimentCount {
            positive
            negative
            neutral
        }
    }
`

export const CLASIFFY_COMMENT_SENTIMENT = gql`
    mutation Mutation($commentId: String!) {
        classifyCommentSentiment(commentId: $commentId)
    }
`