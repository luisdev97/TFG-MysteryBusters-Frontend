import React, { useState } from "react";
import {
  ListItem,
  ListIcon as Icon,
  ListContent as Content,
  Confirm
} from "semantic-ui-react";
import { IncidentMarkerProps } from "../../../props/Anomalies";
import { Link } from "react-router-dom";

const IncidentMarker = ({
  incident,
  handleChangeLocation,
  mutation
}: IncidentMarkerProps) => {
  const [visibleConfirm, setVisibleConfirm] = useState<boolean>(false);
  const { id, title, location } = incident;

  function deleteIncident(id: number) {
    mutation(id);
    setVisibleConfirm(false);
  }

  return (
    <ListItem className="mx-auto incident-marker">
      <Icon
        onClick={() => handleChangeLocation(location)}
        name="map marker alternate"
        link
        color="red"
        size="large"
      />
      <Content
        content={title || "Avistamiento de Wailor en la casa de zeus"}
        className="inc-marker-text"
      />
      <Link to={`/form/${id}`}>
        <Icon name="edit outline" color="orange" link size="large" />
      </Link>

      <Icon
        name="trash"
        color="red"
        link
        size="large"
        onClick={() => setVisibleConfirm(!visibleConfirm)}
      />

      <Confirm
        open={visibleConfirm}
        onCancel={() => setVisibleConfirm(false)}
        onConfirm={() => deleteIncident(id)}
        size="mini"
        className="delete-incident-confirm"
        header={`Eliminar incidente`}
        content={title}
        cancelButton="Cancelar"
        confirmButton="Eliminar"
      />
    </ListItem>
  );
};

export default IncidentMarker;
