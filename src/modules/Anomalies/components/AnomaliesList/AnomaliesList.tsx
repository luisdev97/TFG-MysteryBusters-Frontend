import React from "react";
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

const style = {
  borderRadius: 0,
  opacity: 0.7,
  padding: "2em"
};

const opciones = [
  { key: "af", value: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", text: "Aland Islands" },
  { key: "al", value: "al", text: "Albania" },
  { key: "dz", value: "dz", text: "Algeria" },
  { key: "as", value: "as", text: "American Samoa" },
  { key: "ad", value: "ad", text: "Andorra" },
  { key: "ao", value: "ao", text: "Angola" },
  { key: "ai", value: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", text: "Antigua" },
  { key: "ar", value: "ar", text: "Argentina" },
  { key: "am", value: "am", text: "Armenia" },
  { key: "aw", value: "aw", text: "Aruba" },
  { key: "au", value: "au", text: "Australia" },
  { key: "at", value: "at", text: "Austria" },
  { key: "az", value: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", text: "Barbados" },
  { key: "by", value: "by", text: "Belarus" },
  { key: "be", value: "be", text: "Belgium" },
  { key: "bz", value: "bz", text: "Belize" },
  { key: "bj", value: "bj", text: "Benin" }
];

function CreateAnomalyForm() {
  return (
    <Form>
      <Field>
        <Input name="text" type="text" />
      </Field>
      <Field>
        <Select options={opciones} />
      </Field>
      <Field>
        <Input type="submit" />
      </Field>
    </Form>
  );
}
function AnomaliesList({ anomalies }: AnomaliesListProps) {
  return (
    <List className="w-50 bg-error mx-auto mt-5 pt-5 pb-5">
      <Popup
        trigger={<Icon name="add" size="big" color="olive" className="ml-2" />}
        content={<CreateAnomalyForm />}
        style={style}
        inverted
        on="click"
        className="mx-auto"
      />
      <Label>Agregar anomalía</Label>
      {anomalies.map(a => (
        <AnomalyItem key={a.id} anomaly={a} />
      ))}
    </List>
  );
}

export default AnomaliesList;
