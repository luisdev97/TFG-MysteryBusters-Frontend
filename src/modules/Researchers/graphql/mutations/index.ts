import gql from "graphql-tag";



const registerResearcherInput = gql`
  input RegisterResearcherInput {
    firstname: String!
    lastname: String!
    age: Int
    username: String
    password: String!
    email: String!
    avatar: String
  }
`


export const REGISTER_RESEARCHER_MUTATION = gql`
  mutation register($input: RegisterResearcherInput!) {
    createResearcher(input: $input) {
      firstname
      lastname
      email
      password

    }
  }
`

