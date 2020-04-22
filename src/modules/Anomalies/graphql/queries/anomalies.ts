import gql from "graphql-tag";

const GET_ANOMALIES_QUERY = gql`
    query anomalies {
        getAnomalies {
            id
            creator {
                firstname 
                lastname
            }
            type
            description
            incidents {
                id
                title
                location
                maxResearchers
                resolved
            }
        }
    }
`