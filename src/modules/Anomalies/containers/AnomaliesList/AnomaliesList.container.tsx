import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ANOMALIES_QUERY } from "../../graphql/queries/anomalies";
import { Anomaly } from "../../models/entities/Anomaly";
import AnomaliesList from "../../components/AnomaliesList/AnomaliesList";
import {
  CREATE_ANOMALY_MUTATION,
  DELETE_ANOMALY_MUTATION
} from "../../graphql/mutations/anomalies";

function AnomaliesListContainer() {
  const { error, loading, data } = useQuery(GET_ANOMALIES_QUERY);
  const [create] = useMutation(CREATE_ANOMALY_MUTATION);
  const [remove] = useMutation(DELETE_ANOMALY_MUTATION);
  const [anomalies, setAnomalies] = useState<Anomaly[]>([]);

  useEffect(() => {
    if (!loading && data) {
      setAnomalies(data.getAnomalies);
    }
  }, [loading, data]);

  function deleteAnomaly(e: any, id: number) {
    e.preventDefault();
    remove({
      variables: { id }
    })
      .then(data => {
        if (data.data.deleteAnomaly === 1) {
          let updatedList = { ...anomalies };
          updatedList = anomalies.filter(a => a.id !== id);
          setAnomalies(updatedList);
        }
      })
      .then(error => console.log(error));
  }

  function createAnomaly(input: any){
    create({ variables: { input }}).then(data => {
      let updatedList = [...anomalies, data.data.createAnomaly ];
      setAnomalies(updatedList);
    }).then(error => console.log(error));
  }

  if (loading) return <p>Loading :</p>;
  if (error) return <p>Error :</p>;

  return (
    <AnomaliesList
      anomalies={anomalies}
      create={createAnomaly}
      remove={deleteAnomaly}
      update={deleteAnomaly}
    />
  );
}

export default AnomaliesListContainer;
