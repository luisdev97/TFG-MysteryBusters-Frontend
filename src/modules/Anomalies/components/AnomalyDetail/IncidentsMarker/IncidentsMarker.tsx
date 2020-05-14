import React, { useState, useEffect } from "react";
import { List, Icon, Popup } from "semantic-ui-react";
import { IncidentsMarkerProps } from "../../../props/Anomalies";
import IncidentMarker from "./IncidentMarker";
import "./IncidentsMarker.css";
import FilterIncidents from "./FilterIncidents";
import { Incident } from '../../../../Incidents/models/entities/Incidents';

function IncidentsMarker({
  incidents,
  handleChangeLocation,
  mutation
}: IncidentsMarkerProps) {
  const [filteredIncidents, setfilteredIncidents] = useState<Incident[]>([]);
  const [unresolved, setUnresolved] = useState<boolean>(false);

  function filterResolved(unfilteredIncidents: Incident[]){
    let devuelve = [...filteredIncidents].filter(i => i.resolved === true);
    
    console.log(devuelve);
    setfilteredIncidents(devuelve);
    console.log(filteredIncidents);
    
  }

  useEffect(() => {
    if(unresolved){
      filterResolved(incidents);
    }
    setfilteredIncidents(incidents)
  },[incidents, unresolved]);

  return (
    <>
      <List className="incidents-marker-list mx-auto w-75">
        <div className="lines"></div>

        <h1 className="incident-marker text-center mt-0">
          Incidentes
          <Popup trigger={<Icon name="add" color="olive" className="ml-2" />}>
            <Popup.Header content="Para agregar un nuevo incidente haga click en el mapa" />
          </Popup>
        </h1>

        {filteredIncidents &&
          filteredIncidents.map(i => (
            <IncidentMarker
              handleChangeLocation={handleChangeLocation}
              incident={i}
              key={i.id}
              mutation={mutation}
            />
          ))}
      </List>
      <FilterIncidents setUnresolved={setUnresolved}/>
    </>
  );
}

export default IncidentsMarker;
