import React, { useState, useEffect } from "react";
import { Form, Label, Message } from "semantic-ui-react";
import ResearcherInput from "./ResearcherFormInput/ResearcherInput";
import ResearcherButton from './ResearcherFormInput/ResearcherButton';
import { useForm } from "react-hook-form";
import { RESEARCHER_VALIDATION_LOGIN_SCHEMA as validationSchema } from "./validations";
import { useHistory } from "react-router-dom";

type loginState = { loggedIn: boolean, error: boolean }
export default function Signin({ mutation }: any) {
  const [loggedIn, setLoggedIn] = useState<loginState>({ loggedIn: false, error: false})
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm({ validationSchema });
  const onSubmit = async(data: any) => {
     await mutation(data, setLoggedIn);
  } 

  function checkError(title: string) {
    return (
      errors.hasOwnProperty(title) && (
        <Label basic color="red" pointing="below">
          {errors[title].message}
        </Label>
      )
    );
  }
  
  return (
    <Form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="control">
        <h1>Login</h1>
      </div>
      { loggedIn.error ? <Message className="mb-5" color='red' content={ loggedIn.error }/> : null}

      {checkError("email")}
      <ResearcherInput type="text" name="email" placeholder="Email" register={register}/>     
      {checkError("password")}
      <ResearcherInput type="password" name="password" placeholder="Password" register={register}/>
      <ResearcherButton text="Login"/>
    </Form>
  );
}
