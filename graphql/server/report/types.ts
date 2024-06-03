import { gql } from 'graphql-tag';

const reportTypeDefs = gql`
    type Report {
        userId: String
        eventId: String
        reason: String
        dateTime: DateTime
    }
    type ReportedEvent {
        eventId: String
        eventTitle: String
        authorId: String
        authorName: String
        reportCount: Int
    }
    type Mutation{
        reportEvent(userId: String!, eventId: String!, reason: String): Report
    }
    type Query{
        getReportedEvents:[ReportedEvent]
        getEventReports(eventId: String!): [Report]
        eventReported(userId: String!, eventId: String!): Boolean
    }
`
export { reportTypeDefs }
