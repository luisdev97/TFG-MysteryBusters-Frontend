import { gql } from '@apollo/client';

export const INCIDENTS_QUERY = gql`
query incidents($offset: Int, $limit: Int) {
  getIncidents(offset: $offset, limit: $limit) {
		description
    maxResearchers
    researchers {
		username
    }
  }
}
`