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
    const { incidents } = anomaly;
  return (
    <Grid className="anomaly-detail-container mx-auto bg-danger">
      <Row columns={2} className="mx-auto">
        <Column width={8}>
          <IncidentsMap />
        </Column>
        <Column width={8} className="bg-primary">
            <IncidentsMarker incidents={ incidents }/>
        </Column>
      </Row>
    </Grid>
  );
}

export default AnomalyDetail;
