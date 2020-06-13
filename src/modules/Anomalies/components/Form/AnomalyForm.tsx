import React from "react";

import { ANOMALY_VALIDATION_SCHEMA } from "./validation";
import { Form, FormField as Field, Input, Label } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { anomalyTypes } from './AnomalyTypes';


export default function CreateAnomalyForm({ mutation, closeForm, researcher_id }: any) {
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
    mutation({ researcher_id , ...data });
    closeForm();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {checkError("type")}
      <select name="type" ref={register}>
        <option value="-1">Selecciona un tipo</option>
        {anomalyTypes.map(o => (
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