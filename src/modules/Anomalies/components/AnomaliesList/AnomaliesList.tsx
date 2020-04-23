import React from "react";
import { AnomaliesListProps } from "../../props/Anomalies";
import { List } from "semantic-ui-react";
import AnomalyItem from "./AnomalyItem";
import './AnomaliesList.css';

function AnomaliesList({ anomalies }: AnomaliesListProps) {
  return (
    <List className="w-50 bg-danger mx-auto mt-5 pt-5 pb-5">
      {anomalies.map(a => (
        <AnomalyItem anomaly={a}/>
      ))}
    </List>
  );
}

export default AnomaliesList;
