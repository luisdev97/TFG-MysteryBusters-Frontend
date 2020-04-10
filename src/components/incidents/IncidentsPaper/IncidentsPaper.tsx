import React, { useState, useEffect } from "react";
// @ts-ignore
import FlipPage from "react-flip-page";
import PageSet from "./PageSet/PageSet";
import { useQuery, gql } from "@apollo/client";


const chunk = (arr: [], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const INCIDENTS_QUERY = gql`
query incidents {
  getIncidents {
		description
    maxResearchers
    researchers {
		username
    }
  }
}
`

const IncidentsPaper = () => {
  const { loading, error, data } = useQuery(INCIDENTS_QUERY);
  const [incidents, setIncidents ] = useState<any[][]>([[]]);

  useEffect(() => {
    if(!loading && data){
      console.log(chunk(data.getIncidents,2));
      setIncidents(chunk(data.getIncidents,2));
    }
  },[data])


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
      <PageSet/>
      <PageSet/>
    </FlipPage>
  );
};
//<FlipPage style={{marginTop: "50px", boxShadow: "0px 0px 30px black"}} className="journalWrapper" animationDuration={1300} className="container" height={850} width={1200} orientation="horizontal">

export default IncidentsPaper;
