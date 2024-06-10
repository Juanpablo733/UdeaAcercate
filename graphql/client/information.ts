import gql from "graphql-tag";

export const CREATE_INFORMATION = gql`
    mutation Mutation($title: String!, $description: String!, $image: String!, $authorId: String!) {
    createInfo(title: $title, description: $description, image: $image, authorId: $authorId) {
            title
            description
            date
            image
            tag
            official
            hashtags
        }
    }
`

export const GET_ALL_NOTICE_PREVIEWS = gql`
    query Notices {
        notices {
            id
            title
            date
            minutes
            hours
            day
            month
            year
            image
            tag
            official
        }
    }
`

export const GET_NOTICE_BY_ID = gql`
    query NoticeById($infoId: String!) {
        noticeById(infoId: $infoId) {
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
`