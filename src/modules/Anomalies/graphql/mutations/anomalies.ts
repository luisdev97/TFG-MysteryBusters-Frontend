import { gql } from '@apollo/client';
import { REQUIRED_FIELDS } from '../queries/anomalies';

const createAnomalyInput = gql`
  input CreateAnomalyInput {
      researcher_id: Int!
      description: String!
      type: String!
  }
`

const updateAnomalyInput = gql`
  input UpdateAnomalyInput {
      description: String
      type: String
  }
`


export const CREATE_ANOMALY_MUTATION = gql`
  mutation create($input: CreateAnomalyInput!) {
    createAnomaly(input: $input) {
      ...requiredFields
    }
  }${REQUIRED_FIELDS}
`

export const UPDATE_ANOMALY_MUTATION = gql`
  mutation update($id: Int!, $input: UpdateAnomalyInput!) {
    updateAnomaly(id: $id, input: $input) {
      ...requiredFields
    }
  }${REQUIRED_FIELDS}
`

export const DELETE_ANOMALY_MUTATION = gql`
  mutation delete($id: Int!) {
    deleteAnomaly(id: $id)
  }
`