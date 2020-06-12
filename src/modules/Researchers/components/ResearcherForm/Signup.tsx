import React, { useState } from "react";
import { Form, Label } from "semantic-ui-react";
import ResearcherInput from "./ResearcherFormInput/ResearcherInput";
import ResearcherButton from "./ResearcherFormInput/ResearcherButton";
import { useForm } from "react-hook-form";
import { RESEARCHER_VALIDATION_REGISTER_SCHEMA as validationSchema } from './validations';
import ResearcherCompetenciesSelect from "./ResearcherFormInput/ResearcherCompetenciesSelect";
import { useHistory } from "react-router-dom";

export default function Signup({ mutation }: any) {
  const { register, handleSubmit, errors, watch } = useForm({ validationSchema });
  const onSubmit = (data: any) => handleRegister(data);
  const [competencies, setCompetencies] = useState<[]>([])

  function checkError(title: string) {
    return (
      errors.hasOwnProperty(title) && (
        <Label basic color="red" pointing="below">
          {errors[title].message}
        </Label>
      )
    );
  }

  function handleRegister(data: any) {
    mutation(data)
  }

  function handleChangeCompetencies(values: []) {
    setCompetencies(values);
  }

  return (
    <Form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="control p-fixed">
        <h1>Registrarse</h1>
      </div>
      {checkError("firstname")}
      <ResearcherInput type="text" name="firstname" placeholder="Nombre" register={register} />
      {checkError("lastname")}
      <ResearcherInput type="text" name="lastname" placeholder="Apellidos" register={register} />
      {checkError("email")}
      <ResearcherInput type="text" name="email" placeholder="Email" register={register} />
      {checkError("password")}
      <ResearcherInput type="password" name="password" placeholder="Password" register={register} />
      {checkError("avatar")}
      <ResearcherInput type="file" name="avatar" placeholder="Avatar" register={register} />
      {/*<ResearcherCompetenciesSelect change={handleChangeCompetencies} />*/}
      <ResearcherButton text="Registro" />
    </Form>
  );
}
