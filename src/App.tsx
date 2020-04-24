import React from "react";
import { SideBar } from "./layouts/layout/SideBar/SideBar";
import { Grid, GridRow as Row, GridColumn as Column } from "semantic-ui-react";
import AppRouter from "./routes/AppRouter";
import './App.css';

function App() {
  return (
        <Grid>
          <Row columns={2} style={{marginLeft: 0}}>

            <Column width={3} style={{marginLeft: 0}}>
              <SideBar/>
            </Column>

            <Column className="h-100" width={13} style={{marginLeft: 0}} color={'teal'} >
              <AppRouter/>
            </Column>

          </Row>
        </Grid>
  );
}

export default App;
