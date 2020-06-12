import React, { useState, useEffect } from "react";
import ResearcherForm from '../components/ResearcherForm/ResearcherForm';
import { useMutation, useLazyQuery, useQuery } from '@apollo/client';
import { REGISTER_RESEARCHER_MUTATION, LOGIN_MUTATION } from '../graphql/mutations/index';
import { ME_QUERY } from "../graphql/queries";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { Researcher } from "../models/entities/Researcher";

export default function ResearcherFormContainer() {
  const history = useHistory();
  const { login: auth } = useAuth();
  const [token, setToken] = useState<null | string>(null)
  const [registerResearcher] = useMutation(REGISTER_RESEARCHER_MUTATION);
  const [loginResearcher] = useMutation(LOGIN_MUTATION, { update(cache, { data: cacheData }){
    setToken(cacheData.login);
  }});
  const [getMe, { error, data, loading, called }] = useLazyQuery(ME_QUERY);

  useEffect(() => {
    if(data && !loading && token){
      localStorage.setItem("me", JSON.stringify(data.me));
      auth(token, data.me);
      history.push("/");
    }
  }, [data])


  function register(input: any) {
    delete input.avatar;
    registerResearcher({
      variables: {
        input
      }
    });

  }

  async function login(input: any, setLogin: Function, loginState: any) {
    let errorMessage: string | null = null;
    
    const jwt: any = await loginResearcher({
      variables: {
        input
      }
    }).catch(error => {
      errorMessage = error.message.split(":")[1];
    });

    if (errorMessage)
      setLogin({ ...loginState, error: errorMessage });
    else {
      localStorage.setItem("auth_token", jwt.data.login);
      await getMe();
    }

  }

  return (
    <ResearcherForm register={register} login={login} />
  );
}
