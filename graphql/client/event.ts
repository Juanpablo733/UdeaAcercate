import { gql } from 'graphql-tag';

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
    }
    }
`

export { GET_EVENTS_PREVIEW, GET_EVENT_BY_ID }