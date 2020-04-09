import React from "react";
import "./App.css";
import { SideBar } from "./components/layout/SideBar/SideBar";
import { Grid, GridRow as Row, GridColumn as Column } from "semantic-ui-react";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
      <div className="App">
        <Grid>
          <Row columns={2}>

            <Column width={3}>
              <SideBar />
            </Column>

            <Column width={13} className={"bg-info"}>
              <AppRouter/>
            </Column>

          </Row>
        </Grid>
      </div>
  );
}

export default App;
