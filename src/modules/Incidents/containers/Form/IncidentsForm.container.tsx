import React, { useState, useEffect } from "react";
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
import { isParenthesizedExpression } from "@babel/types";

const initialState: Incident = {
  id: 4,
  belong_to_anomaly: 2,
  title: "Este sera el título del incidente",
  description:
    "7p8)hNmt7NPY7cTr2!hD(e}e[aV[A3$[L&gzqxcCFR8h5{k;y+aMyzi/=#g%Q4n)mf+d_Zea+XAV!GtAy983Gm#Rmymt@M+5t@BL;rr)K8:F)j:;hxiwSn_XL:fP;E5TR]YNff2S)/HiecBxVS7$ic]vV%6x24#EDY#QL,?j2f(9)a4N5a7;#QRP)PqtYn5wP(b@!u8&yn9vBSN?{LqFCw7-X8[]x;?$77nnNcrp!bE",
  img:
    "https://i.pinimg.com/originals/5c/f0/b3/5cf0b3d5ff8328687e751a7f9dffde06.gif",
  location: {
    lat: 42,
    lng: 14,
    place: "Benito Villamarin, Seviolla"
  },
  date: "09/05/2020",
  time: "12:23",
  maxResearchers: 3,
  resolved: false
};

export default function IncidentsFormContainer() {
  const [createIncident] = useMutation(CREATE_INCIDENT_MUTATION);
  const [updateIncident] = useMutation(UPDATE_INCIDENT_MUTATION);
  const [incident, setIncident] = useState<Incident>(initialState);
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
      setIncident(data.getIncident);
    }
  }, [data]);

  const {
    location: {
      state: { location, anomaly_id } = { location: {}, anomaly_id: 1 }
    }
  } = useHistory();
  const history = useHistory();

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
      .then(data => {
        console.log(data);
        history.push(`/anomalies/${anomaly_id}`);
      })
      .then(error => console.log(error));
  }

  function update(id: number, input: any) {
    if (input.date) {
      input.date = incident.date
        .split("-")
        .reverse()
        .join("/");
      input.maxResearchers = Number(incident.maxResearchers);
      input.img = "";
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
  }

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;
  return (
    <IncidentsForm
      initialState={id ? incident : ({} as Incident)}
      mutation={id ? update : create}
    />
  );
}
