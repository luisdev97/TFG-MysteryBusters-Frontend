import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormField as Field, Label } from "semantic-ui-react";
import { incidentFormFields as fields } from "./fields";

type FormData = {
  titulo: string;
  descripcion: string;
  imagen: string;
  fecha: string;
  hora: string;
  maxResearchers: number;
};

export default function IncidentForm() {
  const { errors, register, handleSubmit } = useForm<FormData>();
  //const { errors } = useFormContext<Record<string, any>>();

  const onSubmit = (data: any) => console.log(data);

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-dark mt-5 w-50 mx-auto"
      size="mini"
    >
      {fields.map(i => (
        <Field width={6} className="mx-auto">
          <Label onClick={() => document.getElementsByName(i.name)[0].focus()} pointing='left' size="small" className="mt-2" content={i.name} />
          {errors.hasOwnProperty(i.name) && (
            <Label basic color="red" pointing="below">
              { errors[i.name]!.message }
            </Label>
          )}
          <input type={i.type} name={i.name} ref={register(i.validation)} />
        </Field>
      ))}
      <input type="submit" />
    </Form>
  );
}
