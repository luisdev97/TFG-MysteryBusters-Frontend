import React from "react";
import { GridRow as Row, GridColumn as Column, Grid } from "semantic-ui-react";
import "./PageSet.css";
import NewsHeader from "../NewsHeader/NewsHeader";
import Page from "../Page/Page";
import { PageSetProps } from '../../../props/PaperProps';

function PageSet({ incidents }: PageSetProps) {
  return (
    <Grid className="IncidentsPaper mx-auto" verticalAlign={"middle"}>

        <Row columns={1} className="mx-auto" >
          <NewsHeader />
        </Row>
        <Row columns={2} className="mx-auto">
          <Column width={8} className="page1">
            <Page incident={incidents[0]} numPage={1}/>
          </Column>

          <Column width={8}>
            <Page incident={incidents[1]} numPage={2}/>
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
