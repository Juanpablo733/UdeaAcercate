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
export { CREATE_COMMENT }