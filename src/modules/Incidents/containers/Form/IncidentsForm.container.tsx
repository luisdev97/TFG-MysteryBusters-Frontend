import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_INCIDENT_MUTATION } from "../../graphql/mutations/index";
import { Incident, createIncidentInput } from "../../models/entities/Incidents";
import { useHistory } from "react-router";
import IncidentsForm from "../../components/Form/IncidentsForm";

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

export default function IncidentsFormContainer() {
  const [createIncident] = useMutation(CREATE_INCIDENT_MUTATION);
  let {
    location: {
      state: { location, anomaly_id }
    }
  } = useHistory();

  function create(input: any) {
    const incident: createIncidentInput = { ...input, location, anomaly_id };
    incident.maxResearchers = Number(incident.maxResearchers);
    incident.img = "";
    incident.date = incident.date
      .split("-")
      .reverse()
      .join("/");
    
    createIncident({
      variables: { input: incident }
    })
      .then(data => console.log(data))
      .then(error => console.log(error));
  }

  return <IncidentsForm initialState={initialState} mutation={create} />;
}
