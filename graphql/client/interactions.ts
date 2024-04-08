import gql from "graphql-tag";

export const GET_INTERACTIONS_PER_EVENT_TAG = gql`
    query InteractionsPerEventType {
        interactionsPerEventType {
            academico {
                comments
                attendees
            }
            cultural {
                comments
                attendees
            }
            deportivo {
                comments
                attendees
            }
        }
    }
`