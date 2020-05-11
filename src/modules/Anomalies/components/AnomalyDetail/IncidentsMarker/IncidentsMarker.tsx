import React from "react";
import { List, Icon, Popup } from 'semantic-ui-react';
import { IncidentsMarkerProps } from "../../../props/Anomalies";
import IncidentMarker from "./IncidentMarker";
import "./IncidentsMarker.css";

function IncidentsMarker({
  incidents,
  handleChangeLocation,
  mutation
}: IncidentsMarkerProps) {

  return (
    <List className="incidents-marker-list mx-auto w-75">
      <div className="lines"></div>


      <h1 className="incident-marker text-center mt-0">Incidentes
      <Popup trigger={<Icon name="add" color="olive" className="ml-2"/>}>
        <Popup.Header content="Para agregar un nuevo incidente haga click en el mapa"/>
      </Popup>
      </h1>

      
      {incidents &&
        incidents.map(i => (
          <IncidentMarker
            handleChangeLocation={handleChangeLocation}
            incident={i}
            key={i.id}
            mutation={mutation}
          />
        ))}
    </List>
  );
}

export default IncidentsMarker;
