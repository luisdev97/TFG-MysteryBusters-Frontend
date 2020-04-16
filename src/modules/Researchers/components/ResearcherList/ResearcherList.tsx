import React from "react";
import "./ResearcherList.css";
import { ResearcherListProps } from "../../props/Researcher";
import { Button, Card, Image } from 'semantic-ui-react'

import ResearcherCard from "../ResearcherCard/ResearcherCard";
// @ts-ignore
import Coverflow from 'react-coverflow';

function ResearcherList({ researchers }: ResearcherListProps) {
  return (
    <div>
<Coverflow width="2" height="500"
    displayQuantityOfSide={2}
    navigation={true}
    enableScroll={true}
    clickable={true}
    active={0}
    currentFigureScale={1.2}
    otherFigureScale={0.8}
    enableHeading={false}
  >
  {researchers.map(r => <ResearcherCard researcher={r} key={ r.id } />)}
   
  </Coverflow>
      
    </div>
  );
}

export default ResearcherList;
