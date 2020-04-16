import React from "react";
import { SideBar } from "./layouts/layout/SideBar/SideBar";
import { Grid, GridRow as Row, GridColumn as Column } from "semantic-ui-react";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
      <div >
        <Grid>
          <Row columns={2} style={{marginLeft: 0}}>

            <Column width={3} style={{marginLeft: 0}}>
              <SideBar/>
            </Column>

            <Column width={13} style={{marginLeft: 0}}>
              <AppRouter/>
            </Column>

          </Row>
        </Grid>
      </div>
  );
}

export default App;
