import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
const SideBarResearcherCard = () => {
    
  return (
    <Card centered className="bg-transparent shadow-none">
      <Card.Content>
        <Image
          size={"tiny"}
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/panda-1834062-1555821.png"
          floated="left"
          className="d-inline"
        />
        <Card.Header className="mt-2 text-white">
          <h3>Sandra Casero</h3>
        </Card.Header>
        <Card.Meta className="mt-1 mr-3 text-muted">
          <h4>Administrador</h4>
        </Card.Meta>
        <Card.Meta className="mt-2 text-muted mr-5">
          <span className="mr-4">
            <Icon size="small" name="circle" color={"green"} />
            Online
          </span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default SideBarResearcherCard;
