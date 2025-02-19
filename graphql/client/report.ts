import gql from "graphql-tag";

export const REPORT_EVENT = gql`
    mutation ReportEvent($userId: String!, $eventId: String!, $reason: String) {
        reportEvent(userId: $userId, eventId: $eventId, reason: $reason) {
            userId
            eventId
            reason
            dateTime
        }
    }
`

export const DELETE_REPORT = gql`
    mutation DeleteReport($userId: String!, $eventId: String!) {
        deleteReport(userId: $userId, eventId: $eventId)
    }
`

export const GET_REPORTED_EVENTS = gql`
    query GetReportedEvents {
        getReportedEvents {
            eventId
            eventTitle
            authorId
            authorName
            reportCount
        }
    }
`
export const GET_EVENT_REPORTS = gql`
    query GetEventReports($eventId: String!) {
        getEventReports(eventId: $eventId) {
            userId
            eventId
            reason
            dateTime
        }
    }
`
export const EVENT_REPORTED = gql`
    query Query($userId: String!, $eventId: String!) {
        eventReported(userId: $userId, eventId: $eventId)
    }
`

