import React, { useState } from "react";
import {
  ListItem,
  ListIcon as Icon,
  ListContent as Content,
  Confirm,
  Dropdown
} from "semantic-ui-react";
import { IncidentMarkerProps } from "../../../props/Anomalies";
import { Link, useHistory } from "react-router-dom";

const IncidentMarker = ({
  incident,
  handleChangeLocation,
  mutation
}: IncidentMarkerProps) => {
  const [visibleConfirm, setVisibleConfirm] = useState<boolean>(false);
  const { belong_to_anomaly, id, title, location } = incident;
  //.const { id: anomaly_id } = belong_to_anomaly;
  const history = useHistory();
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
        content={title || "Incidente sin título"}
        className="inc-marker-text"
      />

      <Icon
        name="edit outline"
        color="orange"
        link
        size="large"
        onClick={() => history.push(`/anomalies/${belong_to_anomaly.id}/form/${id}`)}
      />

      <Icon
        name="trash"
        color="red"
        size="large"
        link
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
