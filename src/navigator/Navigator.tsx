import React, { FC } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Search } from "../containers/Search/Search";

type Props = {};

const Navigator: FC<Props> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Search} />
      </Switch>
    </Router>
  );
};

export { Navigator };
