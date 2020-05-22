import React from "react";

import { ANOMALY_VALIDATION_SCHEMA } from "./validation";
import { Form, FormField as Field, Input, Label } from "semantic-ui-react";
import { useForm } from "react-hook-form";
const options = [
  { key: "uf", value: "ufology", text: "UFO" },
  { key: "dm", value: "dark magic", text: "Magia negra" },
  { key: "ps", value: "possesion", text: "Posesión" },
  { key: "ts", value: "transmutation", text: "Transmutación" },
  { key: "ap", value: "apparition", text: "Aparición" }
];

export default function CreateAnomalyForm({ mutation }: any) {
  const { errors, register, watch, handleSubmit } = useForm({
    validationSchema: ANOMALY_VALIDATION_SCHEMA
  });

  function checkError(title: string) {
    return (
      errors.hasOwnProperty(title) && (
        <Label basic color="red" pointing="below">
          {errors[title].message}
        </Label>
      )
    );
  }

  function onSubmit(data: any) {
    mutation({ 
        variables: {
            input: { researcher_id: 4, ...data }
        }
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {checkError("type")}
      <select name="type" ref={register}>
        <option value="-1">Selecciona un tipo</option>
        {options.map(o => (
          <option value={o.value} key={o.text}>
            {o.text}
          </option>
        ))}
      </select>
      <Field>
        {checkError("description")}
        <input
          name="description"
          type="text"
          placeholder="description"
          ref={register()}
        />
      </Field>
      <Field>
        <Input type="submit" />
      </Field>
    </Form>
  );
}
