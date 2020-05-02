import React from "react";
import {
  ListItem,
  ListHeader as Header,
  ListIcon as Icon,
  ListContent as Content
} from "semantic-ui-react";
import { IncidentMarkerProps } from "../../../props/Anomalies";

const IncidentMarker = ({ incident, handleChangeLocation }: IncidentMarkerProps) => {
  const { location } = incident;
  return (
    <ListItem className="mx-auto incident-marker">
      <Icon
        onClick={() => handleChangeLocation(location) }
        name="map marker alternate"
        color="red"
        size="large"
      />
      <Content
        content={incident.title || "Avistamiento de Wailor en la casa de zeus"}
        className="inc-marker-text"
      />
    </ListItem>
  );
};

export default IncidentMarker;
