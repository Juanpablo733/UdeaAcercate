import { gql } from 'graphql-tag';

const eventTypeDefs = gql`
    type Event {
        id: ID
        author:      User
        info: Information 
        place:       String
        attendees:   [Attendee]
        attendeesCount: Int
    }
    type Query {
        events(sessionUserId: String!, tag:String, hashtags:[String]): [Event]
        eventsCreated(userId:String!): [Event]
        eventsAttending(userId:String!): [Event]
        event(id:String!): Event
    }
    type Mutation {
        createEvent(title: String!, description: String!, place: String!, 
            date: DateTime!, image: String!, tag: String!, authorId: String!): Event
        deleteEventByOwner(eventId: String!, ownerId: String!): Boolean
    }
`

export { eventTypeDefs }