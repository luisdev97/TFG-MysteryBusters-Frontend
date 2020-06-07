import React from "react";
import ResearcherForm from '../components/ResearcherForm/ResearcherForm';
import { useMutation } from '@apollo/client';
import { REGISTER_RESEARCHER_MUTATION } from '../graphql/mutations/index';

export default function ResearcherFormContainer() {
  const [registerResearcher] = useMutation(REGISTER_RESEARCHER_MUTATION);

  function register(input: any){
    delete input.avatar;
    registerResearcher({
      variables: {
        input
      }
    });
    
  }

  function login(input: any){
    console.log(input)
  }

  return (
    <ResearcherForm register={register} login={login}/>
  );
}
