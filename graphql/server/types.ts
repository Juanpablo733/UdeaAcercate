import { gql } from 'graphql-tag';
import { eventTypeDefs } from './event/types';
import { profileTypeDefs } from './profile/types';
import { informationTypeDefs } from './information/types';
import { commentTypeDefs } from './comment/types';
import { attendeeTypeDefs } from './attendee/types';
import { sentimentTypeDefs } from './sentiment/types';
import { reportTypeDefs } from './report/types';

const typeDefs = gql`
    scalar DateTime
    type User {
        id: ID
        name:          String
        email:         String
        emailVerified: DateTime
        image:         String
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
        interactionsPerEventType(startDate:DateTime!, endDate:DateTime!): InteractionsPerEventType
    }
    
    type Mutation {
        createUser(name:String!, email:String!, image:String!, emailVerified:String): User
        generateEmailToken(userId:String!): EmailToken
        verifyEmailToken(identifier:String!, token:String!): Boolean
    }
`;
const customTypeDefs = [
    typeDefs,
    profileTypeDefs,
    informationTypeDefs,
    eventTypeDefs,
    commentTypeDefs,
    attendeeTypeDefs,
    sentimentTypeDefs,
    reportTypeDefs
]
export { customTypeDefs }