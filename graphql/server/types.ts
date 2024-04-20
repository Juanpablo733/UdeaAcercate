import { gql } from 'graphql-tag';

const typeDefs = gql`
    scalar DateTime
    type User {
        id: ID
        name:          String
        email:         String
        emailVerified: DateTime
        image:         String
    }  

    type Profile {
        faculty: String
        career: String
        type:   String
        campus: String
        user: User
        description: String
        hobbies: String
        socialLinks: [String]
    }

    type Event {
        id: ID
        author:      User
        info: Information 
        place:       String
        attendees:   [Attendee]
        attendeesCount: Int
    }

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

    type Comment {
        id: ID
        text: String
        dateTime: DateTime 
        user:     User     
        event:    Event    
    }

    type Attendee {
        user: User
        event: Event
    }

    type EmailToken {
        identifier: ID
        token: String
        expires: DateTime
    }

    type InteractionsPerEventType {
        academico: Interaction
        cultural: Interaction
        deportivo: Interaction
    }

    type Interaction {
        attendees: Int
        comments: Int
    }

    type Query {
        test(bool:Boolean!): Boolean
        users: [User]
        user(email:String!): User
        events(sessionUserId: String!, tag:String, hashtags:[String]): [Event]
        eventsCreated(userId:String!): [Event]
        eventsAttending(userId:String!): [Event]
        event(id:String!): Event
        profile(userId:String!): Profile
        attendee(userId:String!, eventId:String!): Boolean
        interactionsPerEventType(startDate:DateTime!, endDate:DateTime!): InteractionsPerEventType
        allComments(startDate:DateTime, endDate:DateTime): [String]
    }
    
    type Mutation {
        createUser(name:String!, email:String!, image:String!, emailVerified:String): User
        createEvent(title: String!, description: String!, place: String!, 
            date: DateTime!, image: String!, tag: String!, authorId: String!): Event
        deleteEventByOwner(eventId: String!, ownerId: String!): Boolean
        createProfile(userId:String!, faculty: String, career: String, type:   String
            campus: String, description: String, hobbies: String, socialLinks: [String]): Profile
        updateProfile(userId:String!, faculty: String, career: String, type:   String
            campus: String, description: String, hobbies: String, socialLinks: [String]): Profile
        createComment(userId:String!, eventId:String!, text:String!): Comment
        deleteCommentByOwner(commentId: String!, ownerId: String!): Boolean
        addAttendee(userId:String!, eventId:String!): Attendee
        quitAttendee(userId:String!, eventId:String!): Boolean
        generateEmailToken(userId:String!): EmailToken
        verifyEmailToken(identifier:String!, token:String!): Boolean
    }
`;

export { typeDefs }