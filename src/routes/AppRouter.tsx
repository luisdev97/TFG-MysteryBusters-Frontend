import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import { AuthContext } from "../modules/Context/AuthContext";
import { Researcher } from "../modules/Researchers/models/entities/Researcher";

function AppRouter() {
  const routeComponents = (me: Researcher | null) => routes.map(({ path, component, authRequired }, key) => {
    return me
            ? <Route exact path={path} component={component} key={key} />
            : authRequired
              ? null
              : <Route exact path={path} component={component} key={key} />
  })
  return (

    <AuthContext.Consumer>
      {({ me }) => (
        <Switch>
          {routeComponents(me)}
        </Switch>
      )}
    </AuthContext.Consumer>
  );
}

export default AppRouter;
