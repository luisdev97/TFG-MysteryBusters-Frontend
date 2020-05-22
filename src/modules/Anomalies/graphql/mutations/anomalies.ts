import { gql } from '@apollo/client';

const createAnomalyInput = gql`
  input CreateAnomalyInput {
      researcher_id: Int!
      description: String!
      type: String!
  }
`


export const CREATE_ANOMALY_MUTATION = gql`
  mutation create($input: CreateAnomalyInput!) {
    createAnomaly(input: $input) {
      id
      description
    }
  }
`

export const DELETE_INCIDENT_MUTATION = gql`
  mutation delete($id: Int!) {
    deleteIncident(id: $id)
  }
`