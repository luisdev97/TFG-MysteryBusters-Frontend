import React from "react";
import { Form, Label } from "semantic-ui-react";
import ResearcherInput from "./ResearcherFormInput/ResearcherInput";
import ResearcherButton from './ResearcherFormInput/ResearcherButton';
import { useForm } from "react-hook-form";
import { RESEARCHER_VALIDATION_LOGIN_SCHEMA as validationSchema } from "./validations";

export default function Signin({ mutation }: any) {
  const { register, handleSubmit, errors } = useForm({ validationSchema });
  const onSubmit = (data: any) => mutation(data);

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
      {checkError("email")}
      <ResearcherInput type="text" name="email" placeholder="Email" register={register}/>     
      {checkError("password")}
      <ResearcherInput type="password" name="password" placeholder="Password" register={register}/>
      <ResearcherButton text="Login"/>
    </Form>
  );
}
