import React from "react";
// @ts-ignore
import FlipPage from "react-flip-page";
import PageSet from "./PageSet/PageSet";
import { IncidentsPaperProps } from "../../props/PaperProps";

const IncidentsPaper = ({ incidents, loadMore }: IncidentsPaperProps) => {
  return (
      <FlipPage
        onPageChange={(pIndex: number, direction: string) => {
          loadMore(pIndex, direction);
        }}
        className="mx-auto mt-5 IncidentsPaper-Wrapper"
        orientation="horizontal"
        height={850}
        width={1200}
        perspective={"420em"}
        pageBackground={"#C1B8A0"}
        maskOpacity={0.7}
      >
        
        { (incidents && incidents.length > 1) && incidents.map(incidentSet => (
          <PageSet incidents={ incidentSet }/>
        ))}
      </FlipPage>
  );
};

export default IncidentsPaper;
