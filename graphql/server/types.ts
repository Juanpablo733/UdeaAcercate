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
        title: String
        description: String
        place:       String
        date:        DateTime
        image:       String
        tag:         String
        author:      User
        attendeesCount: Int
        comments:    [Comment]
        attendees:   [Attendee]
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

    type VerificationToken {
        identifier: ID
        token: String
        expires: DateTime
    }

    type Query {
        users: [User]
        user(email:String!): User
        events(tag:String, hashtags:[String]): [Event]
        event(id:String!): Event
        profile(userId:String!): Profile
    }
    
    type Mutation {
        createUser(name:String!, email:String!, image:String!, emailVerified:String): User
        createEvent(title: String!, description: String!, place: String!, 
            date: DateTime!, image: String!, tag: String!, authorId: String!): Event
        createProfile(userId:String!): Profile
        updateProfile(userId:String!, faculty: String, career: String, type:   String
            campus: String, description: String, hobbies: String, socialLinks: [String]): Profile
        createComment(userId:String!, eventId:String!, text:String!): Comment
        deleteComment(id:String!): Boolean
        addAttendee(userId:String!, eventId:String!): Attendee
        quitAttendee(userId:String!, eventId:String!): Boolean
        generateVerificationToken(userId:String!): VerificationToken
        verifyToken(identifier:String!, token:String!): Boolean
    }
`;

export { typeDefs }