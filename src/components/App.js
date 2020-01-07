import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Home from "../pages/Home";
import "typeface-roboto";

import store from "../setup/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
