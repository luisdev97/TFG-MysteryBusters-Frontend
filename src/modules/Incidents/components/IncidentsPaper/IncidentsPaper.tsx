import React, { useState, useEffect } from "react";
// @ts-ignore
import FlipPage from "react-flip-page";
import PageSet from "./PageSet/PageSet";
import { useQuery } from "@apollo/client";
import { INCIDENTS_QUERY } from '../../graphql/queries/index';
import chunk from "../../helpers/chunkIncidents";
import { Incident } from "../../models/entities/Incidents";


const IncidentsPaper = () => {
  const { loading, error, data } = useQuery(INCIDENTS_QUERY, {
    variables: {
      offset: 0,
      limit: 4
    }
  });
  const [incidents, setIncidents ] = useState<Array<Incident[]>>([[]]);

  useEffect(() => {
    if(!loading && data){
      setIncidents(chunk(data.getIncidents,2));
    }
  },[data, loading]);




  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return (
    <FlipPage
      className="mx-auto mt-5 IncidentsPaper-Wrapper"
      orientation="horizontal"
      height={850}
      width={1200}
      perspective={"420em"}
      pageBackground={"#C1B8A0"}
      maskOpacity={0.7}
    >
      { incidents.map(iSet => <PageSet/>) }
    </FlipPage>
  );
};

export default IncidentsPaper;
