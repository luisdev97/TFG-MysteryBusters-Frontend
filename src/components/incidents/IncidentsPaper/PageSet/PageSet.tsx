import React from "react";
import { GridRow as Row, GridColumn as Column, Grid } from "semantic-ui-react";
import "./PageSet.css";
import NewsHeader from "../NewsHeader/NewsHeader";
import Page from "../Page/Page";

function PageSet() {
  return (
    <Grid className="IncidentsPaper mx-auto mt-5 " verticalAlign={"middle"}>

        <Row columns={1} className="mx-auto" >
          <NewsHeader />
        </Row>
        <Row columns={2} className="mx-auto">
          <Column width={8} >
            <Page numPage={1}/>
          </Column>

          <Column width={8}>
            <Page numPage={2}/>
          </Column>
        </Row>

      {/*
  <Row columns={2}>
          <Column>
            <Page />
          </Column>

          <Column>
            <Page />
          </Column>
        </Row>
      
      */}
    </Grid>
  );
}

export default PageSet;
