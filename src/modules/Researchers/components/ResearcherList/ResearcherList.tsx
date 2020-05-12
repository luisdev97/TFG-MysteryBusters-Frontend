import React, { useState, useEffect } from "react";
import "./ResearcherList.css";
import { ResearcherListProps } from "../../props/Researcher";
import ResearcherCard from "../ResearcherCard/ResearcherCard";
// @ts-ignore
import Coverflow from "react-coverflow";
import { Researcher } from "../../models/entities/Researcher";

function ResearcherList({ researchers }: ResearcherListProps) {
 const [investigadores, setinvestigadores] = useState<Researcher[]>([])

 useEffect(() => {
   setinvestigadores(researchers)
 },[researchers])

 function ordenar(){
  console.log(investigadores.sort());
 }
  return (
    <div>
      <Coverflow
        width="2"
        height="928"
        displayQuantityOfSide={2}
        navigation={true}
        enableScroll={true}
        clickable={true}
        active={0}
        currentFigureScale={1.2}
        otherFigureScale={0.8}
        enableHeading={false}
      >
        {investigadores.map(r => (
          <ResearcherCard researcher={r} key={r.id} />
        ))}
      </Coverflow>
      <button onClick={() => ordenar()}>Ordenar</button>
    </div>
  );
}

export default ResearcherList;
