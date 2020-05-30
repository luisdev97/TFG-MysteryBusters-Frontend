import { gql } from '@apollo/client';



const IncidentInput = gql`
  input CreateIncidentInput {
      anomaly_id: Int!
      title: String!
      description: String!
      location: JSON!
      img: String!
      maxResearchers: Int!
      date: String!
      time: String!
  }
`

export const UpdateIncidentInput = gql`
  input UpdateIncidentInput {
      title: String
      description: String
      img: String
      maxResearchers: Int
  }
`


export const UPDATE_INCIDENT_MUTATION = gql`
  mutation update($id: ID!, $input: UpdateIncidentInput!) {
    updateIncident(id: $id, input: $input) {
      id
      title
      description
    }
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