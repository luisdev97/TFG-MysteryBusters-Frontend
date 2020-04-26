import React from "react";
import { AnomalyDetailProps } from "../../props/Anomalies";
import "./AnomalyDetail.css";
import IncidentsMap from "./IncidentsMap";
import {
  Grid,
  GridColumn as Column,
  GridRow as Row,
  List
} from "semantic-ui-react";
import IncidentsMarker from "./IncidentsMarker/IncidentsMarker";

function AnomalyDetail({ anomaly }: AnomalyDetailProps) {
  const { incidents, description, creator } = anomaly;
  return (
    <Grid className="anomaly-detail-container mx-auto bg-danger">
      <Row columns={2} className="mx-auto">
        <Column width={8}>
          <h1 className="text-center">{ description }</h1>
          <h4 className="text-center">{ creator && creator.firstname }</h4>
          <IncidentsMap />
        </Column>
        <Column width={8}>
            <IncidentsMarker incidents={ incidents }/>
        </Column>
      </Row>
    </Grid>
  );
}

export default AnomalyDetail;
