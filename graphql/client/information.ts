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