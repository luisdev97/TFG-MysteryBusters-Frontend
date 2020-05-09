import React, { useState } from "react";
import { AnomalyDetailProps } from "../../props/Anomalies";
import "./AnomalyDetail.css";
import IncidentsMap from "./IncidentsMap";
import { Grid, GridColumn as Column, GridRow as Row } from "semantic-ui-react";
import IncidentsMarker from "./IncidentsMarker/IncidentsMarker";
import { LocationType } from "../../../Incidents/models/types/LocationType";

function AnomalyDetail({ anomaly }: AnomalyDetailProps) {
  const { incidents, description, creator, type } = anomaly;
  const [locationCoords, setLocationCoords] = useState<LocationType>({
    lng: -5.9818,
    lat: 37.3565,
    place: 'Estadio Benito Villamarín, Sevilla'
  });

  return (
    <Grid className="anomaly-detail-container mx-auto bg-danger">
      <Row columns={2} className="mx-auto">
        <Column width={8}>
          <h1 className="text-center mt-5">{description}</h1>
          <p className="text-center">{ type }</p>
          <h4 className="text-center">
            {creator && creator.firstname + " " + creator.lastname}
          </h4>
          <IncidentsMap point={locationCoords} />
        </Column>

        <Column width={8}>
          <IncidentsMarker
            incidents={incidents}
            handleChangeLocation={setLocationCoords}
          />
        </Column>
      </Row>
    </Grid>
  );
}

export default AnomalyDetail;
