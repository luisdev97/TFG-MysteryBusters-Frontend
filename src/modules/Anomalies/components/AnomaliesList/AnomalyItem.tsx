import React, { useState } from "react";
import { AnomalyItemProps } from "../../props/Anomalies";
//import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { anomalyTypes } from "../Form/AnomalyTypes";

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


function AnomalyItem({ anomaly, update, remove }: AnomalyItemProps) {
  const { id, description, type, creator } = anomaly;
  const [editMode, setEditMode] = useState<boolean>(false);
  const [data, setData] = useState({ description, type });

  function handleChangeMode(e: any) {
    e.preventDefault();
    setEditMode(!editMode);
  }

  function handleFocusInput(e: any) {
    e.preventDefault();
  }

  function handleChange(e: any) {
    const changes = Object.defineProperty({ ...data }, e.target.name, {
      value: e.target.value
    });
    setData(changes);
  }

  function handleUpdate(e: any, input: any) {
    e.preventDefault();
    update(id, input);
    setEditMode(false);
  }

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
            <Header
              content={
                editMode ? (
                  <input
                    type="text"
                    name="description"
                    value={data.description}
                    onClick={e => handleFocusInput(e)}
                    onChange={e => handleChange(e)}
                  />
                ) : (
                  description
                )
              }
              className="mt-1 ml-4 a-item-header"
            />

            <Meta
              content={creator && `${creator.firstname} ${creator.lastname}`}
              className="ml-4 a-item-meta"
            />
            <Icon
              className="float-right"
              name="edit outline"
              size="big"
              color={editMode ? "black" : "grey"}
              onClick={(e: any) => handleChangeMode(e)}
            />
            <Icon
              className="float-right"
              name="trash alternate"
              link
              size="big"
              onClick={(e: any) => remove(e, id)}
            />

            <Segment
              content={
                editMode ? (
                  <select
                    name="type"
                    onClick={e => handleFocusInput(e)}
                    onChange={e => handleChange(e)}
                  >
                    <option value="-1">Selecciona un tipo</option>
                    {anomalyTypes.map(o => (
                      <option value={o.value} key={o.text}>
                        {o.text}
                      </option>
                    ))}
                  </select>
                ) : (
                  type.toLocaleUpperCase()
                )
              }
              size={"small"}
              inverted
              floated={"left"}
              className="mt-2"
            />
            {editMode && (
              <Segment
                size={"mini"}
                inverted
                floated={"left"}
                className="mt-2 text-white p-3 m-0"
                content="GUARDAR CAMBIOS"
                onClick={(e: any) => handleUpdate(e, data)}
              />
            )}
          </Content>
        </Card>
      </Link>
    </ListItem>
  );
}

export default AnomalyItem;
