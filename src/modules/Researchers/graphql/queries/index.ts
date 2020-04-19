import { gql } from '@apollo/client';





export const GET_RESEARCHERS_QUERY = gql`
query researchers {
    getResearchers {
        id
        firstname
        lastname
        username
        age
        email
        password
        avatar
        role
        competencies {
            type
        }
        posted_anomalies {
            id
            type
            description
        }
    }
}
`

