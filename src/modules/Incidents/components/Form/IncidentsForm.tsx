import React, { useState, useEffect } from "react";
import { Grid, GridColumn as Column, GridRow as Row } from "semantic-ui-react";
import CustomForm from "../../../../UI/CustomForm";
import INCIDENT_SCHEMA from "./validation";
import { incidentsFieldsMap } from "./fields";
import { useHistory } from "react-router";
import { Incident, updateIncidentInput, createIncidentInput } from '../../models/entities/Incidents';
import Page from "../IncidentsPaper/Page/Page";
import { CREATE_INCIDENT_MUTATION } from "../../graphql/mutations/index";
import { useMutation } from "@apollo/client";
import './IncidentsForm.css';

const initialState: Incident = {
  id: 4,
  belong_to_anomaly: 2,
  title: "Este sera el título del incidente",
  description: "Esta será la descripción del incidente",
  img:
    "https://i.pinimg.com/originals/5c/f0/b3/5cf0b3d5ff8328687e751a7f9dffde06.gif",
  location: {
    lat: 42,
    lng: 14,
    place: "Benito Villamarin, Seviolla"
  },
  date: "09/05/2020",
  time: "12:23",
  maxResearchers: 8,
  resolved: false
};
 
export default function IncidentsForm() {
  const [formData, setFormData] = useState<Incident>(initialState);
  const [createIncident, { data }] = useMutation(CREATE_INCIDENT_MUTATION);

  const {
    location: {
      state: { location, anomaly_id }
    },
  } = useHistory();

  useEffect(() => {
    console.log({ ...formData, anomaly_id });
  }, [formData,data]);

  function create(){
    try{
      const input = { ...formData, anomaly_id };
      createIncident({
        variables: { input }
      }).then( data => console.log(data)).then(error => console.log(error) )
    }catch(e){
      console.log(e)
    }
    
  }

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
          />
          <button
            onClick={() => create()
      
            }
          >
            Comprobar
          </button>
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
