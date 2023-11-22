import { gql } from 'graphql-tag';
import { Event } from "@/prisma/generated/type-graphql"

export interface ExtendedEvent extends Event{
    minutes: string,
    hours: string,
    day: string,
    month: string,
    year: string,
    attendeesCount: number,
}

const GET_EVENTS_PREVIEW = gql`
    query Events {
        events {
        id
        tag
        author {
            id
            name
            image
        }
        title
        image
        date
        attendeesCount
        minutes
        hours
        day
        month
        year
        }
    }
`

const GET_EVENT_BY_ID = gql`
    query Event($id: String!) {
    event(id: $id) {
        comments {
            text
            dateTime
            user {
                id
                name
                image
            }
            id
        }
        place
        description
        hashtags
        attendeesCount
    }
    }
`

export { GET_EVENTS_PREVIEW, GET_EVENT_BY_ID }