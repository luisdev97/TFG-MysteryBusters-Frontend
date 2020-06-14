import React, { useState, useEffect, Suspense } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import {
  CREATE_INCIDENT_MUTATION,
  UPDATE_INCIDENT_MUTATION
} from "../../graphql/mutations/index";
import {
  Incident,
  createIncidentInput,
  updateIncidentInput
} from "../../models/entities/Incidents";
import { useHistory, useParams } from "react-router";
import IncidentsForm from "../../components/Form/IncidentsForm";
import { GET_ONE_INCIDENT_QUERY } from "../../graphql/queries/index";

export default function IncidentsFormContainer() {
  const [createIncident] = useMutation(CREATE_INCIDENT_MUTATION);
  const [updateIncident] = useMutation(UPDATE_INCIDENT_MUTATION);
  //const [incident, setIncident] = useState<Incident>({ } as Incident);
  const { id } = useParams();
  const [getIncident, { error, data, loading }] = useLazyQuery(
    GET_ONE_INCIDENT_QUERY,
    {
      variables: {
        id: Number(id)
      }
    }
  );

  useEffect(() => {

    if (id && !data) {
      getIncident();
    }
    if (!loading && data) {
      console.log("llega la request")
      //setIncident(data.getIncident);
    }
  }, [data]);

  const {
    location: {
      state: { location, anomaly_id } = { location: {}, anomaly_id: 1 }
    }
  } = useHistory();
  const history = useHistory();

  async function create(input: any) {
    const incident: createIncidentInput = { ...input, location, anomaly_id };
    incident.maxResearchers = Number(incident.maxResearchers);
    incident.date = incident.date
      .split("-")
      .reverse()
      .join("/");
    createIncident({
      variables: { input: incident }
    })
      .then(data => {
        console.log(data);
        history.push(`/anomalies/${anomaly_id}`);
      })
      .then(error => console.log(error));
  }

  function update(id: number, input: any) {
    console.log(anomaly_id)
    return;
    if (input.maxResearchers)
      input.maxResearchers = Number(input.maxResearchers);
    console.log(input);
    updateIncident({
      variables: {
        id,
        input
      }
    })
      .then(data => {
        history.push(`/anomalies/${anomaly_id}`);
      })
      .then(error => console.log(error));

  }

  if (loading) return <p>Loading</p>;
  if (id) {
    if (data?.getIncident)
      return <IncidentsForm initialState={data.getIncident} mutation = { update}/>
    else
      return <p>Loading...</p>
}

  else
return (
  <IncidentsForm
    initialState={{} as Incident}
    mutation={create}
  />
);
}
