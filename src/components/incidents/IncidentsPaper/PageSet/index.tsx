import React from "react";
import { GridRow as Row, GridColumn as Column } from "semantic-ui-react";
import "./index.css";

function PageSet() {
  return (
    <>
      <Row></Row>

      
      <Row className="IncidentsPaper" columns={2}>
        <Column></Column>

        <Column></Column>
      </Row>
    </>
  );
}

export default PageSet;
