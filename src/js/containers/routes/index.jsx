import React, { Suspense } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { routeList } from "./routeList";
import Layout from "../layout";

class Routes extends React.PureComponent {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Layout>
            {routeList &&
              routeList.map((route) => {
                return (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                  />
                );
              })}
          </Layout>
        </Switch>
      </Suspense>
    );
  }
}

export default withRouter(Routes);
