import React from "react";
import { List } from "semantic-ui-react";
import { IncidentsMarkerProps } from "../../../props/Anomalies";
import IncidentMarker from "./IncidentMarker";
import "./IncidentsMarker.css";

function IncidentsMarker({ incidents }: IncidentsMarkerProps) {
  return (
    <List className="incidents-marker-list mx-auto w-75">
      {incidents && incidents.map(i => <IncidentMarker incident={ i } />)}
    </List>
  );
}

export default IncidentsMarker;
