import React, { useState, useEffect } from "react";
// @ts-ignore
import { useQuery } from "@apollo/client";
import { INCIDENTS_QUERY } from "../../graphql/queries/index";
import chunk from "../../helpers/chunkIncidents";
import { Incident } from "../../models/entities/Incidents";
import IncidentsPaper from "../../components/IncidentsPaper/IncidentsPaper";

function IncidentsPaperContainer() {
  const [incidents, setIncidents] = useState<Array<Incident[]>>([[]]);
  const { loading, data, fetchMore } = useQuery(INCIDENTS_QUERY, {
    variables: {
      offset: 0,
      limit: 8
    },
    fetchPolicy: "cache-and-network"
  });

  useEffect(() => {
    if (!loading && data) {
      setIncidents(chunk(data.getIncidents, 2));
    }
  }, [data, loading]);
  

  function onFetchMore(
    pIndex: number | null = null,
    direction: string | null = null
  ) {
    if (pIndex === incidents.length - 2 && direction === "next") {
      const offset: number = incidents.flat(1).length;
      fetchMore({
        variables: {
          offset,
          limit: 2
        },
        updateQuery: (prev, { fetchMoreResult }: any) => {
          if (!fetchMoreResult) return prev;
          return Object.assign({}, prev, {
            getIncidents: [
              ...prev.getIncidents,
              ...fetchMoreResult.getIncidents
            ]
          });
        }
      });
    }
  }

  return <IncidentsPaper incidents={incidents} loadMore={onFetchMore}/>;
}

export default IncidentsPaperContainer;
