import React from "react";
import { useForm } from "react-hook-form";
import { UPDATE_INCIDENT_SCHEMA } from "./validation";
import { Form, FormField as Field, Label } from "semantic-ui-react";
import { useParams } from "react-router";

export default function UpdateForm({ initialState, mutation }: any) {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: UPDATE_INCIDENT_SCHEMA,
    defaultValues: (function(){
      let validState = {...initialState};
      delete validState.img;
      return validState;
    })()
  });
  const { id } = useParams();
  function onSubmit(data: any) {
    const input = {...initialState}
    mutation(id, Object.assign({},input));
  }

  function checkError(title: string) {
    return (
      errors.hasOwnProperty(title) && (
        <Label basic color="red" pointing="below">
          {errors[title].message}
        </Label>
      )
    );
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-info w-75 mx-auto mt-5"
    >
      <Field width={7} className="mx-auto">
        {checkError("title")}
        <input name="title" ref={register} />
      </Field>

      <Field width={7}>
        {checkError("description")}
        <input name="description" ref={register} />
      </Field>
      <Field width={7}>
        {checkError("date")}
        <input type="date" name="date" ref={register} />
      </Field>
      <Field width={7}>
        {checkError("time")}
        <input type="time" name="time" ref={register} />
      </Field>
      <Field width={7}>
        {checkError("img")}

        <input type="file" name="img" ref={register} className="bg-dark" />
      </Field>
      <Field width={7}>
        {checkError("maxResearchers")}
        <input type="number" name="maxResearchers" ref={register} />
      </Field>
      <input type="submit" />
    </Form>
  );
}
