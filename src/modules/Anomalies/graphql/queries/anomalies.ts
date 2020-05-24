import gql from "graphql-tag";


export const REQUIRED_FIELDS = gql`
    fragment requiredFields on Anomaly {
        id
        creator {
            firstname 
            lastname
        }
        type
        description
    }
`

export const GET_ANOMALIES_QUERY = gql`
    query anomalies {
        getAnomalies {
            ...requiredFields
        }
    }${REQUIRED_FIELDS}
`

export const GET_ONE_ANOMALY_QUERY = gql`
    query anomaly($id: Int!) {
        getAnomaly(id: $id ){
            ...requiredFields
            incidents {
                belong_to_anomaly {
                    id
                }
                id
                title
                maxResearchers
                resolved
                location
            }
        }
    }${REQUIRED_FIELDS}
`