import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ONE_ANOMALY_QUERY } from '../graphql/queries/anomalies';
import { Anomaly } from "../models/entities/Anomaly";
import { useParams } from "react-router";
import AnomalyDetail from '../components/AnomalyDetail/AnomalyDetail';

function AnomalyDetailContainer() {
  const { id } =  useParams();
  const [ anomaly, setAnomaly ] = useState<Anomaly>({} as Anomaly)
  const {error, loading, data } = useQuery(GET_ONE_ANOMALY_QUERY, {
      variables : {
          id: Number(id)
      },
      fetchPolicy: "cache-and-network"
  });

  useEffect(() => {
    if(!loading && data){
        setAnomaly(data.getAnomaly);
    }
  },[loading, data]);

  if (loading) return <p>Loading :</p>;
  if (error) return <p>Error : </p>;


  return <AnomalyDetail anomaly={ anomaly }/>;;
}

export default AnomalyDetailContainer;
