import { gql } from 'graphql-tag';

const attendeeTypeDefs = gql`
    type Attendee {
        user: User
        event: Event
    }
    type Query {
        attendee(userId:String!, eventId:String!): Boolean
    }
    type Mutation {
        addAttendee(userId:String!, eventId:String!): Attendee
        quitAttendee(userId:String!, eventId:String!): Boolean
    }
`

export { attendeeTypeDefs }