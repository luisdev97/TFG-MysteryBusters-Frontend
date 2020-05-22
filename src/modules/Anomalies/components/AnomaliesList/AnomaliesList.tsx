import React, { useState } from "react";
import { AnomaliesListProps } from "../../props/Anomalies";
import { List, Popup, Button } from "semantic-ui-react";
import AnomalyItem from "./AnomalyItem";
import "./AnomaliesList.css";
import CreateAnomalyForm from "../Form/AnomalyForm";

const style = {
  borderRadius: 0,
  opacity: 1,
  padding: "2em"
};

function AnomaliesList({ anomalies, create }: AnomaliesListProps) {
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  return (
    <List className="w-50 bg-danger mx-auto mt-5 pt-5 pb-5">
      <Popup
        trigger={
          <Button className="anomalyPopup-trigger" color="vk">
            Crear anomalía
          </Button>
        }
        content={<CreateAnomalyForm mutation={create}/>}
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
