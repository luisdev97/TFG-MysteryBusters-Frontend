import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import { AuthContext } from "../modules/Context/AuthContext";
import { Researcher } from "../modules/Researchers/models/entities/Researcher";
import Home from "../modules/general/Home";

function AppRouter() {
  const routeComponents = (me: Researcher | null) => {
    let filteredRoutes;
    filteredRoutes = me ? routes : routes.filter(({ authRequired }) => !authRequired); 
    return filteredRoutes.map(({ path, component, authRequired }, key) => {
      return <Route exact path={path} component={component} key={key} />
    })


  }


  return (
    <AuthContext.Consumer>
      {({ me }) => (
        <Switch>
          {routeComponents(me)}
          {<Route render={ () =>  <Redirect to="/"/> } />}
        </Switch>
      )}
    </AuthContext.Consumer>
  );
}

export default AppRouter;
