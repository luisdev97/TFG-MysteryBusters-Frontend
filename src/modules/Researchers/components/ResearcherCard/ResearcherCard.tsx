import React, { useState } from "react";
import { ResearcherCardProps } from "../../props/Researcher";
import { Card, Image } from "semantic-ui-react";
import "./ResearcherCard.css";
import CustomModal from "./CustomModal/CustomModal";

function ResearcherCard({ researcher }: ResearcherCardProps) {
  
  const { firstname, lastname, role, competencies, posted_anomalies, assigned_incidents } = researcher;
  const [hover, setHover] = useState(false);
  return (
    <Card
      className="researcher-card"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Card.Content style={{ width: "auto", height: "350px" }}>
        <Image
          className="d-inline-block"
          size={hover ? "small" : "medium"}
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />

        <div
          className={"ml-4 " + (hover ? "d-inline-block" : "d-none")}
          style={{ width: "120px" }}
        >
          <Card.Header className="mt-3">
            <h4 className="mb-0">{ firstname }</h4>
            <h5 style={{ margin: 0 }}>{ lastname }</h5>
          </Card.Header>

          <Card.Meta className="mt-2 mr-3 text-muted">
            <h5>{ role }</h5>
          </Card.Meta>

        </div>

        {hover && (
          <div
            className="bg-dark mt-3"
            style={{ width: "100%", height: "50%" }}
          >
            <CustomModal modalType="competencie" data={{ competencies }} />
            <CustomModal modalType="anomaly" data={{ posted_anomalies }} />
            <CustomModal modalType="incident" data={{ assigned_incidents }} />
            
          </div>
        )}
      </Card.Content>
    </Card>
  );
}


/*type ResearcherCardInfoProps = {
  firstname: string;
  lastname: string;
  role: string;
}*/

export default ResearcherCard;
