import React, { useState } from "react";
import { Container, Segment } from "semantic-ui-react";
import "./ResearcherForm.css";
import Signin from "./Signin";
import Signup from './Signup';

export default function ResearcherForm() {
  const [signupMode, setSignupMode] = useState<boolean>(false);
  return (
    <Container className="mt-5 researcher-form-container">
      <Segment.Group horizontal className="h-100 rform-segment">
        <Segment>
          <Signup/>
        </Segment>
        <Segment>
          <Signin/>
        </Segment>
      </Segment.Group>
    </Container>
  );
}
