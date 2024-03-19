import gql from "graphql-tag";

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

export { CREATE_COMMENT, DELETE_SELF_COMMENT }