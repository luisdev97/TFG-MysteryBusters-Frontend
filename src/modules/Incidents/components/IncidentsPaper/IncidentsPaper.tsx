import React, { useState, useEffect } from "react";
// @ts-ignore
import FlipPage from "react-flip-page";
import PageSet from "./PageSet/PageSet";
import { useQuery } from "@apollo/client";
import { INCIDENTS_QUERY } from "../../graphql/queries/index";
import chunk from "../../helpers/chunkIncidents";
import { Incident } from "../../models/entities/Incidents";

const IncidentsPaper = () => {
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

  return (
    <>
      <FlipPage
        onPageChange={(pIndex: number, direction: string) => {
          onFetchMore(pIndex, direction);
        }}
        className="mx-auto mt-5 IncidentsPaper-Wrapper"
        orientation="horizontal"
        height={850}
        width={1200}
        perspective={"420em"}
        pageBackground={"#C1B8A0"}
        maskOpacity={0.7}
      >
        {incidents.map(iSet => (
          <PageSet />
        ))}
      </FlipPage>

      <button
        className="btn btn-block btn-primary"
        onClick={() => {
          onFetchMore();
        }}
      >
        OBTENER MAS
      </button>
    </>
  );
};

export default IncidentsPaper;
