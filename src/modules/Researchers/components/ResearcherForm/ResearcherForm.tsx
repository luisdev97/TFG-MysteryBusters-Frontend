import React, { useState } from "react";
import { Container, Segment } from "semantic-ui-react";
import "./ResearcherForm.css";
import Signin from "./Signin";
import Signup from "./Signup";
import OverlayForm from "./OverlayForm";
import "./OverlayForm.css";

export default function ResearcherForm({ create, update }: any) {
  const [signupMode, setSignupMode] = useState<boolean>(false);

  return (
    <Container
      className={
        "mt-5 researcher-form-container wrapper " +
        (signupMode ? "right-panel-active" : "")
      }
    >
      <Segment.Group horizontal className="h-100 form-segment">
        <Segment className="form-wrapper sign-up-wrapper">
          <Signup mutation={ create }/>
        </Segment>

        <Segment className="form-wrapper sign-in-wrapper">
          <Signin mutation={ update }/>
        </Segment>
      </Segment.Group>
      <OverlayForm setMode={() => setSignupMode(!signupMode)} />
    </Container>
  );
}
