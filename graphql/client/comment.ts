import gql from "graphql-tag";

const GET_ALL_COMMENTS = gql`
    query Query($startDate: DateTime, $endDate: DateTime) {
        allComments(startDate: $startDate, endDate: $endDate)
    }       
`

const CREATE_COMMENT = gql`
    mutation CreateComment($userId: String!, $eventId: String!, $text: String!) {
        createComment(userId: $userId, eventId: $eventId, text: $text) {
            id
            text
            dateTime
            user {
                id
                name
                image
            }
        }
    }
`

const DELETE_SELF_COMMENT = gql`
    mutation Mutation($ownerId: String!, $commentId: String!) {
        deleteCommentByOwner(ownerId: $ownerId, commentId: $commentId)
    }
`

export { GET_ALL_COMMENTS, CREATE_COMMENT, DELETE_SELF_COMMENT }