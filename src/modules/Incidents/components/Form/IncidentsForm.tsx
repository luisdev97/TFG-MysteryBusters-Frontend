import React, { useState } from "react";
import { Grid, GridColumn as Column, GridRow as Row } from "semantic-ui-react";
import CustomForm from "../../../../UI/CustomForm";
import INCIDENT_SCHEMA from "./validation";
import { incidentsFieldsMap } from "./fields";
import { Incident, updateIncidentInput, createIncidentInput } from '../../models/entities/Incidents';
import Page from "../IncidentsPaper/Page/Page";
import './IncidentsForm.css';
import { IncidentsFormProps } from '../../props/IncidentsForm';

 
export default function IncidentsForm({ mutation, initialState }: IncidentsFormProps) {
  const [formData, setFormData] = useState<Incident>(initialState);

  return (
    <Grid className="anomaly-detail-container mx-auto bg-danger">
      <Row columns={2} className="mx-auto">
        <Column width={8}>
          <CustomForm<Incident>
            fields={incidentsFieldsMap}
            validationSchema={INCIDENT_SCHEMA}
            handleChanges={setFormData}
            prevData={formData}
            aditionalClasses='incidentsForm'
            mutation={mutation}
          />
        </Column>

        <Column width={8}>
          <div className="m-5">
            <Page incident={formData} numPage={1}/>
          </div>
        </Column>
      </Row>
    </Grid>
  );
}

/*
<CustomForm
      fields={incidentsFieldsMap}
      validationSchema={INCIDENT_SCHEMA}
      handleChanges={setFormData}
    />
*/
