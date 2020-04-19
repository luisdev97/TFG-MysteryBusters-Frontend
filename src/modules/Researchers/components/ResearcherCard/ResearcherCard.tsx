import React, { useState } from "react";
import { ResearcherCardProps } from "../../props/Researcher";
import { Card, Image, Dropdown, Button } from "semantic-ui-react";
import "./ResearcherCard.css";

function ResearcherCard({ researcher }: ResearcherCardProps) {
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
            <h4 className="mb-0">Luis</h4>
            <h5 style={{ margin: 0 }}>Amador Montoro</h5>
          </Card.Header>

          <Card.Meta className="mt-2 mr-3 text-muted">
            <h5>Administrador</h5>
          </Card.Meta>
        </div>

        {hover && (
          <div
            className="bg-dark mt-3"
            style={{ width: "100%", height: "50%" }}
          >
            <div className="mx-auto d-inline bg-info">
      
            </div>

            <div className="mx-auto d-inline bg-error">

            </div>
            
          </div>
        )}
      </Card.Content>
    </Card>
  );
}

export default ResearcherCard;
