import { gql } from '@apollo/client';

export const INCIDENTS_QUERY = gql`
query incidents {
  getIncidents {
		description
    maxResearchers
    researchers {
		username
    }
  }
}
`