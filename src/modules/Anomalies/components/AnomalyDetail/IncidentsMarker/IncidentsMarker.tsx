import React from "react";
import { List, ListHeader as Header } from "semantic-ui-react";
import { IncidentsMarkerProps } from "../../../props/Anomalies";
import IncidentMarker from "./IncidentMarker";
import "./IncidentsMarker.css";

function IncidentsMarker({
  incidents,
  handleChangeLocation
}: IncidentsMarkerProps) {
  
  return (
    <List className="incidents-marker-list mx-auto w-75">
      <div className="lines"></div>
      {incidents &&
        incidents.map(i => (
          <IncidentMarker
            handleChangeLocation={handleChangeLocation}
            incident={i}
            key={i.id}
          />
        ))}
    </List>
  );
}

export default IncidentsMarker;
