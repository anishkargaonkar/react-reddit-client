import React, { FC } from "react";
import {
    Switch, Route,
    BrowserRouter as Router
} from "react-router-dom";

type Props = {};

const Navigator: FC<Props> = () => {
  return (
    <Router>
      <Switch>
        <Route
            path="/"
            render={() => <div>Hello world</div>} />
      </Switch>
    </Router>
  );
};

export { Navigator };
