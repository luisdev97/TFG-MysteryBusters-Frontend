import { gql } from '@apollo/client';



const IncidentInput = gql`
input CreateIncidentInput {
    anomaly_id: Int!
    description: String!
    location: JSON!
    maxResearchers: Int!
    date: Date!
    time: Time!
}
`
export const CREATE_INCIDENT_MUTATION = gql`
mutation create($input: CreateIncidentInput) {
  createIncident(input: $input) {
    id
    title
    description
  }
}
`