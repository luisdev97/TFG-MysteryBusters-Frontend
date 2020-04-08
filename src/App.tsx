import React from "react";
import "./App.css";
import { SideBar } from "./components/layout/SideBar/SideBar";
import { Grid, GridRow as Row, GridColumn as Column } from "semantic-ui-react";
import AppRouter from "./routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Grid>
          <Row columns={2}>
            <Column style={{ background: "orange" }}>
              <SideBar />
            </Column>

            <Column style={{ background: "yellow" }}>
              <Switch>
                <Route
                  path="/researchers"
                  render={() => <div className="bg-info">Researchers</div>}
                />

                <Route
                  path="/anomalies"
                  render={() => <div className="bg-error">Anomalies</div>}
                />

                <Route
                  path="/incidents"
                  render={() => <div className="bg-success">Incidents</div>}
                />
              </Switch>
            </Column>
          </Row>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
