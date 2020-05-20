import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ONE_ANOMALY_QUERY } from "../graphql/queries/anomalies";
import { Anomaly } from "../models/entities/Anomaly";
import { useParams } from "react-router";
import AnomalyDetail from "../components/AnomalyDetail/AnomalyDetail";
import { DELETE_INCIDENT_MUTATION } from "../../Incidents/graphql/mutations/index";

function AnomalyDetailContainer() {
  const { id } = useParams();
  const [anomaly, setAnomaly] = useState<Anomaly>({} as Anomaly);
  const [deleteIncident] = useMutation(DELETE_INCIDENT_MUTATION);
  const { error, loading, data } = useQuery(GET_ONE_ANOMALY_QUERY, {
    variables: {
      id: Number(id)
    }
  });

  function deleteOneIncident(id: number) {
    deleteIncident({
      variables: { id }
    })
      .then(data => {
        if (data.data.deleteIncident === 1) {
          let updatedAnomaly = {...anomaly};
          updatedAnomaly.incidents = updatedAnomaly.incidents.filter(a => a.id !== id);
          setAnomaly(updatedAnomaly);
        }
      })
      .then(error => console.log(error));
  }

  useEffect(() => {
    if (!loading && data) {
      setAnomaly(data.getAnomaly);
    }
  }, [loading, data]);

  if (loading) return <p>Loading :</p>;
  if (error) return <p>Error : </p>;

  return <AnomalyDetail anomaly={anomaly} mutation={deleteOneIncident} />;
}

export default AnomalyDetailContainer;
