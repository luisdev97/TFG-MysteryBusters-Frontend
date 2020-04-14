import React from "react";
import './ResearcherList.css'
import { ResearcherListProps } from "../../props/Researcher";
import ResearcherCard from "../ResearcherCard/ResearcherCard";

function ResearcherList({ researchers }: ResearcherListProps) {
  return (
    <div>
        {researchers.map(r => <ResearcherCard researcher={r}/>)}
    </div>
  );
}

export default ResearcherList;
