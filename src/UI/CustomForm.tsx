import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormField as Field, Label } from "semantic-ui-react";
import { CustomFormProps } from "./props";
import { Incident } from "../modules/Incidents/models/entities/Incidents";


const inicial = {
  id: 4,
  belong_to_anomaly: 2,
  title: "Este sera el título del incidente",
  description: "Esta será la descripción del incidente",
  img:
    "https://i.pinimg.com/originals/5c/f0/b3/5cf0b3d5ff8328687e751a7f9dffde06.gif",
  location: {
    lat: 42,
    lng: 14,
    place: "Benito Villamarin, Seviolla"
  },
  date: "09/05/2020",
  time: "12:23",
  maxResearchers: 8,
  resolved: false
};
export default function CustomForm<T>({
  fields,
  validationSchema,
  handleChanges,
  prevData,
  aditionalClasses,
  mutation
}: CustomFormProps<T>) {
  console.log(prevData)
  const { errors, register, watch, formState, handleSubmit } = useForm({
    validationSchema,
    defaultValues: inicial
  });
  const watchedFields = watch(Array.from(formState.dirtyFields));
  function onSubmit() {
    mutation(watchedFields);
  }

  return (
    <Form
      className={`bg-dark mt-5 w-50 mx-auto ${aditionalClasses}`}
      size="mini"
      onSubmit={handleSubmit(onSubmit)}
    >
      {fields.map(i => (
        <Field width={6} className="mx-auto">
          <Label
            onClick={() => document.getElementsByName(i.name)[0].focus()}
            size="small"
            className="mt-2 d-inline"
            content={i.name}
          />
          {errors.hasOwnProperty(i.name) && (
            <Label basic color="red" pointing="below">
              {errors[i.name]!.message}
            </Label>
          )}
          <input
            type={i.type}
            name={i.name}
            ref={register()}
            onChange={() => {
              handleChanges({ ...prevData, ...watchedFields });
            }}
            className="v-hidden"
          />
        </Field>
      ))}
      <button type="submit">Confirmar</button>
    </Form>
  );
}
