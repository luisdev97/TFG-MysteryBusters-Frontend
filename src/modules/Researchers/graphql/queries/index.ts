import { gql } from '@apollo/client';





export const GET_RESEARCHERS_QUERY = gql`
query researchers {
    getResarchers {
        id
        firstname
        lastname
        username
        age
        email
        avatar
        role
        competencies
    }
}
`

