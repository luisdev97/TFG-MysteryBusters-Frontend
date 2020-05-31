import React from "react";
import ResearcherInput from "./ResearcherFormInput/ResearcherInput";

export default function Signin() {
  return (
    <form className="form">
      <div className="control">
        <h1>Sign In</h1>
      </div>
      <ResearcherInput type='text' name='firstname' placeholder='Nombre'/>
      <ResearcherInput type='text' name='lastname' placeholder='Apellidos'/>
      <ResearcherInput type='text' name='email' placeholder='Email'/>
      <ResearcherInput type='password' name='password' placeholder='Password'/>
      <ResearcherInput type='file' name='avatar' placeholder='Avatar'/>
    </form>
  );
}
