import React from "react";
import { Form } from "semantic-ui-react";
import ResearcherInput from "./ResearcherFormInput/ResearcherInput";
import ResearcherButton from "./ResearcherFormInput/ResearcherButton";
import { useForm, Controller } from "react-hook-form";
import { register } from '../../../../serviceWorker';
export default function Signup() {
  const { register, handleSubmit, errors, control, watch } = useForm();
  const watched = watch()
  const onSubmit = (data: any) => console.log(data);

  return (
    <Form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="control">
        <h1>Registrarse</h1>
      </div>
      <ResearcherInput type="text" name="firstname" placeholder="Nombre" register={register}/>
      <ResearcherInput type="text" name="lastname" placeholder="Apellidos" register={register}/>
      <ResearcherInput type="text" name="email" placeholder="Email" register={register}/>
      <ResearcherInput type="password" name="password" placeholder="Password" register={register}/>
      <ResearcherInput type="file" name="avatar" placeholder="Avatar" register={register}/>
      <ResearcherButton/>
      <button onClick={() => console.log(watched)}>Check</button>
    </Form>
  );
}
