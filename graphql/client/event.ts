import { gql } from 'graphql-tag';
import { Event } from "@/prisma/generated/type-graphql"

export interface ExtendedEvent extends Event {
    minutes: string,
    hours: string,
    day: string,
    month: string,
    year: string,
    attendeesCount: number,
}

export const CREATE_EVENT = gql`
mutation Mutation($title: String!, $description: String!, $place: String!, $date: DateTime!, $image: String!, $tag: String!, $authorId: String!) {
    createEvent(title: $title, description: $description, place: $place, date: $date, image: $image, tag: $tag, authorId: $authorId) {
      id
    }
  }
`
export const DELETE_EVENT_BY_OWNER = gql`
    mutation DeleteEventByOwner($eventId: String!, $ownerId: String!) {
        deleteEventByOwner(eventId: $eventId, ownerId: $ownerId)
    }
`
export const GET_OFFICIAL_EVENTS_PREVIEW = gql`
    query OfficialEvents {
        officialEvents {
            id
            place
            attendeesCount
            author {
                id
                name
                image
            }
            info {
                title
                image
                date
                minutes
                hours
                day
                month
                year
                tag
                official
            }
        }
    }
` 
export const GET_EVENTS_PREVIEW = gql`  
    query Events($sessionUserId: String!, $tag: String, $hashtags: [String]) {
        events(sessionUserId: $sessionUserId, tag: $tag, hashtags: $hashtags) {
            id
            place
            attendeesCount
            author {
                id
                name
                image
            }
            info {
                title
                image
                date
                minutes
                hours
                day
                month
                year
                tag
                official
            }
        }
    }
`
export const GET_EVENT_BY_ID = gql`
    query Event($eventId: String!) {
        event(id: $eventId) {
            place
            attendeesCount
            info {
                description
                hashtags
                comments {
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
        }
    }
`
export const GET_EVENTS_ATTENDING = gql`
    query Query($userId: String!) {
        eventsAttending(userId: $userId) {
            id
            place
            attendeesCount
            author {
                id
                name
                image
            }
            info {
                title
                image
                date
                minutes
                hours
                day
                month
                year
                tag
                official
            }
        }
    }
`
export const GET_EVENTS_CREATED = gql`
    query EventsCreated($userId: String!) {
        eventsCreated(userId: $userId) {
            id
            place
            attendeesCount
            author {
                id
                name
                image
            }
            info {
                title
                image
                date
                minutes
                hours
                day
                month
                year
                tag
                official
            }
        }
    }
`
