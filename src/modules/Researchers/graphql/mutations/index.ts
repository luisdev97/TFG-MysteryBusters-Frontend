import gql from "graphql-tag";



const registerResearcherInput = gql`
  input ResearcherInput {
    firstname: String!
    lastname: String!
    age: Int
    username: String
    password: String!
    email: String!
    avatar: String
  }
`

const loginInput = gql`
  input LoginInput {
    email: String!
    password: String!
  }
`


export const REGISTER_RESEARCHER_MUTATION = gql`
  mutation register($input: ResearcherInput!) {
    createResearcher(input: $input) {
      firstname
      lastname
      email
      password

    }
  }
`


export const LOGIN_MUTATION = gql`
mutation login($input: Login!) {
  login(input: $input)  
}
`

