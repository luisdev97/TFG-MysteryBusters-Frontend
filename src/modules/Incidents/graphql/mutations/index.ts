import { gql } from '@apollo/client';



const IncidentInput = gql`
input CreateIncidentInput {
    anomaly_id: Int!
    title: String!
    description: String!
    location: JSON!
    img: String!
    maxResearchers: Int!
    date: Date!
    time: Time!
}
`

export const CREATE_INCIDENT_MUTATION = gql`
  mutation create($input: CreateIncidentInput!) {
    createIncident(input: $input) {
      id
      title
      description
    }
  }
`


export const DELETE_INCIDENT_MUTATION = gql`
  mutation delete($id: Int!) {
    deleteIncident(id: $id)
  }
`