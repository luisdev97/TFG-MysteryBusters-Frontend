import { gql } from '@apollo/client';

export const INCIDENTS_QUERY = gql`
query incidents($offset: Int, $limit: Int) {
  getIncidents(offset: $offset, limit: $limit) {
    id
		description
    date
    time
    maxResearchers
    researchers {
		username
    }
  }
}
`