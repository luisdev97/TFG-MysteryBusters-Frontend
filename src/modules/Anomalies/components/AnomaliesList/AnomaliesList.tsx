import React, { useState } from "react";
import { AnomaliesListProps } from "../../props/Anomalies";
import { List, Popup, Button, Pagination } from "semantic-ui-react";
import AnomalyItem from "./AnomalyItem";
import "./AnomaliesList.css";
import CreateAnomalyForm from "../Form/AnomalyForm";
import usePagination from "../../../../hooks/usePagination";
import { Anomaly } from "../../models/entities/Anomaly";

const style = {
  borderRadius: 0,
  opacity: 1,
  padding: "2em"
};

function AnomaliesList({
  anomalies,
  create,
  update,
  remove
}: AnomaliesListProps) {
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  const pagination = usePagination<Anomaly>(anomalies, 2);

  return (
    <List className="w-50 bg-danger mx-auto mt-5 pt-5 pb-5">
      <Popup
        trigger={
          <Button className="anomalyPopup-trigger d-block" color="vk">
            Crear anomalía
          </Button>
        }
        content={
          <CreateAnomalyForm
            mutation={create}
            closeForm={() => setVisibleForm(false)}
          />
        }
        style={style}
        inverted
        on="click"
        open={visibleForm}
        onOpen={() => setVisibleForm(true)}
        position="top center"
      />
      <Pagination
        className=''
        defaultActivePage={1}
        totalPages={anomalies.length / 2}
        onPageChange={(e, { activePage }) => pagination.jump(Number(activePage))}
      />
      {pagination.currentData().map(a => (
        <AnomalyItem key={a.id} anomaly={a} update={update} remove={remove} />
      ))}
    </List>
  );
}

export default AnomaliesList;
