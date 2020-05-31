import React from "react";
import { Form } from "semantic-ui-react";
import ResearcherInput from "./ResearcherFormInput/ResearcherInput";
import ResearcherButton from "./ResearcherFormInput/ResearcherButton";
export default function Signup() {
  return (
    <Form className="form">
      <div className="control">
        <h1>Registrarse</h1>
      </div>
      <ResearcherInput type="text" name="firstname" placeholder="Nombre" />
      <ResearcherInput type="text" name="lastname" placeholder="Apellidos" />
      <ResearcherInput type="text" name="email" placeholder="Email" />
      <ResearcherInput type="password" name="password" placeholder="Password" />
      <ResearcherInput type="file" name="avatar" placeholder="Avatar" />
      <ResearcherButton />
    </Form>
  );
}
