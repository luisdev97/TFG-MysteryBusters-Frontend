import React, { lazy } from "react";
import ResearcherForm from '../components/ResearcherForm/ResearcherForm';
import { useMutation, useLazyQuery, useQuery } from '@apollo/client';
import { REGISTER_RESEARCHER_MUTATION, LOGIN_MUTATION } from '../graphql/mutations/index';
import { ME_QUERY } from "../graphql/queries";

export default function ResearcherFormContainer() {
  const [registerResearcher] = useMutation(REGISTER_RESEARCHER_MUTATION);
  const [loginResearcher] = useMutation(LOGIN_MUTATION);
  const [getMe, { error, data, loading }] = useLazyQuery(ME_QUERY);

  function register(input: any) {
    delete input.avatar;
    registerResearcher({
      variables: {
        input
      }
    });

  }

  async function login(input: any) {
    const jwt: any = await loginResearcher({
      variables: {
        input
      }
    })
    localStorage.setItem("auth_token", jwt.data.login);
    //getMe({ hea})
    console.log(localStorage.getItem("auth_token"));
  }

  return (
    <ResearcherForm register={register} login={login} />
  );
}
