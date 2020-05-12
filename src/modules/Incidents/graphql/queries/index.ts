import { gql } from '@apollo/client';



export const INCIDENTS_QUERY = gql`
  query incidents($offset: Int, $limit: Int) {
    getIncidents(offset: $offset, limit: $limit) {
      id
      title
      description
      img
      date
      time
      maxResearchers
      researchers {
      username
      }
    }
  }
`

export const GET_ONE_INCIDENT_QUERY = gql`
  query getOne($id: Int!){
    getIncident(id: $id){
      title
      description
      location
      img
      maxResearchers
      date
      time
    }
  }
`
