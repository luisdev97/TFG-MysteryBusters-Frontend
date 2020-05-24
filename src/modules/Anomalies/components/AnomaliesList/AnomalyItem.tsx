import React from "react";
import { AnomalyItemProps } from "../../props/Anomalies";
//import { Link } from "react-router-dom";

import {
  ListItem,
  Card,
  CardContent as Content,
  CardHeader as Header,
  CardMeta as Meta,
  Image,
  Segment,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
function AnomalyItem({ anomaly }: AnomalyItemProps) {
  const { id, description, type, creator } = anomaly;

  return (
    <ListItem className="pl-2 pr-2 w-75 mx-auto mt-2">
      <Link to={`anomalies/${id}`}>
      <Card color={"teal"} fluid link={true}>
        <Content textAlign={"left"} extra={true}>
          <Image
            floated="left"
            size={"small"}
            src="https://www.w3schools.com/w3css/img_lights.jpg"
          />
          <Header content={description} className="mt-1 ml-4 a-item-header" />
          <Meta
            content={creator && `${creator.firstname} ${creator.lastname}`}
            className="ml-4 a-item-meta"
          />
          <Segment content={ type.toLocaleUpperCase() } size={'small'} inverted floated={'left'} className="mt-2"/>
          <Icon.Group className='float-right'>
          <Icon name='remove' size='small'/>
        </Icon.Group>
        </Content>
        
      </Card>
      </Link>
     
    </ListItem>
  );
}

export default AnomalyItem;
