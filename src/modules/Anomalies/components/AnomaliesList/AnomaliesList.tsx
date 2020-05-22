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
import { useForm } from 'react-hook-form';

const style = {
  borderRadius: 0,
  opacity: 1,
  padding: "2em"
};

const options = [
  { key: "af", value: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", text: "Aland Islands" },
];

function CreateAnomalyForm() {
  const { errors, register, watch } = useForm<{ type: string, description: string }>();
  const watchedFields = watch();
  return (
    <Form>
      <Button onClick={ () => console.log(watchedFields)}>Comprobar</Button>
      <select name="type" ref={register}>
        <option value="-1">Selecciona un tipo</option>
        {options.map(o => <option value={o.value} key={o.text}>{o.text}</option>)}
        
      </select>
      <Field>
        <input name="description" type="text" placeholder="description" ref={register()}/>
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
