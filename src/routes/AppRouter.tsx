import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

function AppRouter() {
  const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);

  return (
      <Switch>
        { routeComponents }
      </Switch>
  );
}

export default AppRouter;
