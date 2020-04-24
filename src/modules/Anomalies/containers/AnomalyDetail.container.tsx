import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ONE_ANOMALY_QUERY } from '../graphql/queries/anomalies';
import { Anomaly } from "../models/entities/Anomaly";

function AnomalyDetailContainer() {
  const {error, loading, data } = useQuery(GET_ONE_ANOMALY_QUERY, {
      variables : {
          id: 5
      },
      fetchPolicy: "cache-and-network"
  });
  const [ anomaly, setAnomaly ] = useState<Anomaly>()

  useEffect(() => {
    if(!loading && data){
        setAnomaly(data.getAnomaly);
    }
    if(error){
      console.log(error);
    }
  },[loading, data]);

  if (loading) return <p>Loading :</p>;
  if (error) return <p>Error : </p>;


  return <div></div>;
}

export default AnomalyDetailContainer;
