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
  const [onlyAvailables, setOnlyAvailables] = useState<boolean>(false);

  function filterAvailables(unfilteredIncidents: Incident[]): Incident[]{
    return [...filteredIncidents].filter(i => !i.resolved);
  }

  useEffect(() => {
    if(!onlyAvailables)
      setfilteredIncidents(incidents)
    else
      setfilteredIncidents(filterAvailables(incidents))
  },[incidents, onlyAvailables]);

  return (
    <>
      <List className="incidents-marker-list mx-auto w-75">
        <div className="lines"></div>

        <h1 className="incident-marker text-center mt-0">
          Incidentes
          <Popup trigger={<Icon name="add" color="olive" className="ml-2" />}>
            <Popup.Header content="Para agregar un nuevo incidente haga click en el mapa. Asegúrese de haber iniciado sesión" />
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
      <FilterIncidents setAvailables={setOnlyAvailables}/>
    </>
  );
}

export default IncidentsMarker;
