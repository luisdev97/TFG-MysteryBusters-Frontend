import React, { useState, useEffect } from "react";
import { Grid, GridColumn as Column, GridRow as Row } from "semantic-ui-react";
import { Incident } from "../../models/entities/Incidents";
import Page from "../IncidentsPaper/Page/Page";
import "./IncidentsForm.css";
import { IncidentsFormProps } from "../../props/IncidentsForm";
import CreateForm from "./CreateForm";
import "./IncidentsForm.css";
import UpdateForm from "./UpdateForm";

export default function IncidentsForm({
  mutation,
  initialState
}: IncidentsFormProps) {
  const [formData, setFormData] = useState<Incident>(initialState);

  useEffect(() => {
    setFormData(initialState);
  }, [initialState]);

  return (
    <Grid className="anomaly-detail-container mx-auto bg-danger">
      <Row columns={2} className="mx-auto">
        <Column width={8}>
          {Object.keys(initialState).length === 0 ? (
            <CreateForm
              mutation={mutation}
              initialState={initialState}
              handleChanges={setFormData}
            />
          ) : (
            <UpdateForm
              mutation={mutation}
              initialState={initialState}
              handleChanges={setFormData}
            />
          )}
        </Column>

        <Column width={8}>
          <div className="m-5">
            <Page incident={formData} numPage={1} />
          </div>
        </Column>
      </Row>
    </Grid>
  );
}
