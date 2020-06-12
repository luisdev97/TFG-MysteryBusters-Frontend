import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { useAuth, AuthContext } from "../../../modules/Context/AuthContext";
const guestIcon = require("../../../assets/icons/pregunta.png");
const researcherIcon = require("../../../assets/icons/agente.png");

const SideBarResearcherCard = () => {
  return (
    <AuthContext.Consumer>
      {({ me }) => (
        <Card centered className="bg-transparent shadow-none">
          <Card.Content>
            <Image
              size={"tiny"}
              src={me ? researcherIcon : guestIcon }
              floated="left"
              className="d-inline"
            />
            <Card.Header className="mt-2 text-white">
              <h3>{me ? me.firstname.concat(` ${me.lastname.split(" ")[0]}`) : "Invitado"}</h3>
            </Card.Header>
            <Card.Meta className="mt-1 mr-3 text-muted">
              <h4>{ me?.role?.toUpperCase() || "Administrador" }</h4>
            </Card.Meta>
            <Card.Meta className="mt-2 text-muted mr-5">
              <span className="mr-4">
                <Icon size="small" name="circle" color={"green"} />
            Online
          </span>
            </Card.Meta>
          </Card.Content>
        </Card>)}

    </AuthContext.Consumer>
  );
};

export default SideBarResearcherCard;
