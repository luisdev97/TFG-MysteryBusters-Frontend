import React, { useState } from "react";
import { ResearcherCardProps } from "../../props/Researcher";
import { Card, Image } from "semantic-ui-react";
import "./ResearcherCard.css";

function ResearcherCard({ researcher }: ResearcherCardProps) {
  const [hover, setHover] = useState(false);
  return (
    <Card
    className="researcher-card"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        className="mt-2"
        floated="right"
        size={hover ? "small" : "medium"}
        src="https://react.semantic-ui.com/images/avatar/large/molly.png"
      />
    </Card>
  );
}

export default ResearcherCard;
