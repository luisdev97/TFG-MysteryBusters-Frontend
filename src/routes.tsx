import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AppRouter() {
  return (
    <Router forceRefresh={true}>
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
    </Router>
  );
}

export default AppRouter;
