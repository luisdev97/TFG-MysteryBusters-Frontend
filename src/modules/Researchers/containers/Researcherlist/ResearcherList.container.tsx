import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_RESEARCHERS_QUERY } from "../../graphql/queries";
import { Researcher } from "../../models/entities/Researcher";
import ResearcherList from "../../components/ResearcherList/ResearcherList";

function ResearcherListContainer() {
  const [researchers, setResearchers] = useState<Researcher[]>([]);
  const { loading, data, error } = useQuery(GET_RESEARCHERS_QUERY);

  useEffect(() => {
    if (!loading && data) {
      setResearchers(data.getResearchers);
    }
  }, [loading, data]);

  if (loading) return <p>Loading :</p>;
  if (error) return <p>Error :</p>;
  
  return <ResearcherList researchers={researchers} />;
}

export default ResearcherListContainer;
