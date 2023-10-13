import { gql } from 'graphql-tag';

const GET_EVENTS_PREVIEW = gql`
    query Events {
        events {
        id
        tag
        author {
            name
            image
        }
        title
        image
        date
        attendeesCount
        }
    }
`

export {GET_EVENTS_PREVIEW}