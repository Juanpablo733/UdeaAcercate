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

const CREATE_EVENT =gql`
mutation Mutation($title: String!, $description: String!, $place: String!, $date: DateTime!, $image: String!, $tag: String!, $authorId: String!) {
    createEvent(title: $title, description: $description, place: $place, date: $date, image: $image, tag: $tag, authorId: $authorId) {
      id
    }
  }
`


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

const GET_EVENTS_ATTENDING = gql`
    query Query($userId: String!) {
        eventsAttending(userId: $userId) {
            id
            tag
            author {
                id
                image
                name
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

const GET_EVENTS_CREATED = gql`
    query Query($userId: String!) {
        eventsCreated(userId: $userId) {
            id
            tag
            author {
                id
                image
                name
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

export { GET_EVENTS_PREVIEW, GET_EVENT_BY_ID, GET_EVENTS_ATTENDING, GET_EVENTS_CREATED, CREATE_EVENT }