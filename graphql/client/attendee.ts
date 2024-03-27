import gql from "graphql-tag";

const ADD_ATTENDEE = gql`
    mutation AddAttendee($userId: String!, $eventId: String!) {
        addAttendee(userId: $userId, eventId: $eventId) {
            event {
                id
                info {
                    tag
                    title
                }
            }
            user {
                id
                name
            }
        }
    }
`
const FIND_ATTENDEE = gql`
    query Query($userId: String!, $eventId: String!) {
        attendee(userId: $userId, eventId: $eventId)
    }
`

const QUIT_ATTENDEE = gql`
    mutation Mutation($userId: String!, $eventId: String!) {
    quitAttendee(userId: $userId, eventId: $eventId)
  }
`


export {ADD_ATTENDEE, FIND_ATTENDEE,QUIT_ATTENDEE}