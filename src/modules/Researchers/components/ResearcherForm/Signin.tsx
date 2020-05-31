import React from "react";
import { Form } from "semantic-ui-react";

import ResearcherInput from "./ResearcherFormInput/ResearcherInput";
import ResearcherButton from './ResearcherFormInput/ResearcherButton';

export default function Signin() {
  return (
    <Form className="form">
      <div className="control">
        <h1>Login</h1>
      </div>
      <ResearcherInput type="text" name="email" placeholder="Email" />
      <ResearcherInput type="password" name="password" placeholder="Password" />
      <ResearcherButton/>
    </Form>
  );
}
