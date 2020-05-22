import React, { useState } from "react";
import { AnomaliesListProps } from "../../props/Anomalies";
import {
  List,
  Popup,
  Button,
  Icon,
  Form,
  FormField as Field,
  Input,
  Select,
  Label
} from "semantic-ui-react";
import AnomalyItem from "./AnomalyItem";
import "./AnomaliesList.css";
import { useForm } from "react-hook-form";
import { ANOMALY_VALIDATION_SCHEMA } from "../Form/validation";

const style = {
  borderRadius: 0,
  opacity: 1,
  padding: "2em"
};

const options = [
  { key: "af", value: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", text: "Aland Islands" }
];

function CreateAnomalyForm() {
  const { errors, register, watch, handleSubmit } = useForm({
    validationSchema: ANOMALY_VALIDATION_SCHEMA
  });
  const watchedFields = watch();

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
    console.log(data);
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

function AnomaliesList({ anomalies }: AnomaliesListProps) {
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  return (
    <List className="w-50 bg-danger mx-auto mt-5 pt-5 pb-5">
      <Popup
        trigger={
          <Button className="anomalyPopup-trigger" color="vk">
            Crear anomalía
          </Button>
        }
        content={<CreateAnomalyForm />}
        style={style}
        inverted
        on="click"
        position="top center"
      />
      {anomalies.map(a => (
        <AnomalyItem key={a.id} anomaly={a} />
      ))}
    </List>
  );
}

export default AnomaliesList;
