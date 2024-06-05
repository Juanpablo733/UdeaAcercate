import gql from "graphql-tag";

export const IS_USER_ADMIN = gql`
    query Query($userId: String!) {
      isUserAdmin(userId: $userId)
    }
`

export const GRANT_ADMIN_TO_USER = gql`
    mutation GrantAdminToUser($userId: String!, $adminUserId: String!) {
      grantAdminToUser(userId: $userId, adminUserId: $adminUserId)
    }
`

export const GET_USER_LIST_BY_EMAIL = gql`
  query GetUsersByMail($email: String!) {
    getUsersByMail(email: $email) {
      id
      name
      email
    }
  }
`